import {Store} from '@ngrx/store';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, concatMap, map, mergeMap, tap} from 'rxjs';
import {AuthActions} from '../actions/auth.action';
import {AuthService} from '../../service/auth.service';
import {CredentialInterface, TokenInterface} from '../../interfaces/auth.interface';
import {Injectable} from '@angular/core';
import {TokenService} from '../../service/token.service';
import {AUTH_CONST} from '../../constant/auth.constant';
import {LoadAction} from '../../../../../core/components/utils/load/store';
import {Router} from '@angular/router';
import {ConnectState} from '../auth.state';
import {UserConnectedActions} from '../actions/userConnected.action';

@Injectable()
export class AuthEffect {

  constructor(
    private _store: Store,
    private _action$: Actions,
    private _authService: AuthService,
    private _tokenService: TokenService,
    private _router: Router
  ) {
  }

  login$ = createEffect(() => {
    return this._action$.pipe(
      ofType(AuthActions.AuthActionsType.AUTH_LOGIN),
      mergeMap((action: { type: AuthActions.AuthActionsType.AUTH_LOGIN, credential: CredentialInterface }) => {
        // Load actions
        this._store.dispatch(LoadAction.load());
        return this._authService.signInWithEmailAndPassword(action.credential)
          .pipe(
            concatMap((token: TokenInterface) => {
              // Format to ConnectData
              const connectData = this._authService.formatTokenToConnect(token);
              // Credential State
              return [
                LoadAction.load(),
                (AuthActions.loginSuccess({payload: connectData})),
                UserConnectedActions.userConnected()
              ];
            }),
            tap((result: any) => {
              if (result.type === AuthActions.AuthActionsType.AUTH_LOGIN_SUCCESS) {
                this.switchPlatform(result.payload);
              }
            }),
            catchError(() => {
              // Destroy auth credentials
              this._tokenService.removeToken();
              // load && error
              return [
                LoadAction.load(),
                AuthActions.errorAuth({error: AUTH_CONST.error.signInError})];
            })
          )
      })
    )
  }, {dispatch: true});

  googlelogin$ = createEffect(() => {
    return this._action$.pipe(
      ofType(AuthActions.AuthActionsType.AUTH_GOOGLE_LOGIN),
      mergeMap((action: { type: AuthActions.AuthActionsType.AUTH_GOOGLE_LOGIN, tempToken: string }) => {
        // Load actions
        this._store.dispatch(LoadAction.load());
        return this._authService.handleAuthentication(action.tempToken)
          .pipe(
            concatMap((token: TokenInterface) => {
              // Format to ConnectData
              const connectData = this._authService.formatTokenToConnect(token);
              // Credential State
              return [
                LoadAction.load(),
                (AuthActions.loginSuccess({payload: connectData})),
                UserConnectedActions.userConnected()
              ];
            }),
            tap((result: any) => {
              if (result.type === AuthActions.AuthActionsType.AUTH_LOGIN_SUCCESS) {
                this.switchPlatform(result.payload);
              }
            }),
            catchError(() => {
              // Destroy auth credentials
              this._tokenService.removeToken();
              // load && error
              return [
                LoadAction.load(),
                AuthActions.errorAuth({error: AUTH_CONST.error.signInError})];
            })
          )
      })
    )
  }, {dispatch: true});

  autoLogin$ = createEffect(() => {
    return this._action$.pipe(
      ofType(AuthActions.AuthActionsType.AUTH_AUTOLOGIN),
      mergeMap((action: { type: AuthActions.AuthActionsType.AUTH_AUTOLOGIN }) => {
          // Getting Refresh token
          let token = this._tokenService.token;
          // Set loading true
          this._store.dispatch(LoadAction.load());
          return this._authService.autoLogin()
            .pipe(
              concatMap((token: TokenInterface) => {
                // Decode && format token
                const connectData = this._authService.formatTokenToConnect(token);
                // dispatch user connected state
                return [
                  LoadAction.load(),
                  AuthActions.autoLoginSuccess({payload: connectData})
                ];
              }),
              catchError(() => {
                this._tokenService.removeToken();
                return [
                  LoadAction.load(),
                  AuthActions.errorAuth({error: AUTH_CONST.error.autoLoginError})
                ]
              })
            )
        }
      )
    )
  }, {dispatch: true})

  logout$ = createEffect(() => {
    return this._action$.pipe(
      ofType(AuthActions.AuthActionsType.AUTH_LOGOUT),
      mergeMap((data: { type: AuthActions.AuthActionsType.AUTH_LOGOUT }) => {
        this._store.dispatch(LoadAction.load());
        return this._authService.logOut()
          .pipe(
            concatMap(() => {
              this._tokenService.removeToken();
              return [
                LoadAction.load(),
                AuthActions.authLogOutSuccess(),
                UserConnectedActions.userDisconnect()
              ];
            }),
            tap(() => {
              this._router.navigate(['/']);
            }),
            catchError(() => {
              return [
                LoadAction.load(),
                AuthActions.errorAuth({error: AUTH_CONST.error.autoLoginError})
              ]
            })
          )
      }))
  });

  signup$ = createEffect(() => {
    return this._action$.pipe(
      ofType(AuthActions.AuthActionsType.AUTH_REGISTER),
      mergeMap((action: { type: AuthActions.AuthActionsType.AUTH_REGISTER, credential: CredentialInterface }) => {
        this._store.dispatch(LoadAction.load());
        return this._authService.signUp(action.credential)
          .pipe(
            map(() => (LoadAction.load())),
            // redirect to sign-in page
            tap(() => {
              this._router.navigate(['/auth/signin']);
            }),
            catchError(() => {
              return [
                LoadAction.load(),
                AuthActions.errorAuth({error: AUTH_CONST.error.signUpError})
              ]
            })
          )
      })
    )
  }, {dispatch: true})

  /**
   *
   * @param connectState
   */
  switchPlatform(connectState: ConnectState): void {
    // Verify last link
    this._authService.getLastLink
      .subscribe((url: string) => {
        if (url) {
          this._router.navigate([url]);
          return;
        }
        if (connectState.is_admin) {
          this._router.navigate(['/admin/home']);
        } else if (connectState.is_owner) {
          this._router.navigate(['/owner/house']);
        } else {
          this._router.navigate(['/client/reservations'])
        }
      });
  }
}

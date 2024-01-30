import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {UserConnectedActions} from '../actions/userConnected.action';
import {catchError, concatMap, mergeMap} from 'rxjs';
import {LoadAction} from '../../../../../core/components/utils/load/store';
import {AuthService} from '../../service/auth.service';

import {AUTH_CONST} from '../../constant/auth.constant';
import {UserInterface} from '../../../../admin/users/shared/model/user.interface';

@Injectable()
export class UserConnectedEffect {

  constructor(
    private _store: Store,
    private _action$: Actions,
    private _authService: AuthService
  ) {
  }

  userConnected$ = createEffect(() =>
    this._action$.pipe(
      ofType(UserConnectedActions.UserConnectedActionType.USER_CONNECTED),
      mergeMap((action: { type: UserConnectedActions.UserConnectedActionType.USER_CONNECTED }) => {
        this._store.dispatch(LoadAction.load());
        return this._authService.userConnected()
          .pipe(
            concatMap((user: UserInterface) => ([LoadAction.load(), UserConnectedActions.userConnectedSuccess({user})])),
            catchError(() => ([LoadAction.load(), UserConnectedActions.userConnectedError({error: AUTH_CONST.error.connectedUser})]))
          )
      })
    ), {dispatch: true})
}

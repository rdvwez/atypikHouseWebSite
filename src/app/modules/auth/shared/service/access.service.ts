import {Injectable, OnDestroy} from '@angular/core';
import {Store} from '@ngrx/store';
import {Subject} from 'rxjs';
import {TokenService} from './token.service';
import {AuthActions, UserConnectedActions} from '../store';
import {DecodedInterface} from '../interfaces/auth.interface';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AccessService implements OnDestroy {
  private destroyed$: Subject<void> = new Subject<void>();

  constructor(
    private _store: Store,
    private _tokenService: TokenService,
    private _router: Router
  ) {
  }


  check(): boolean {
    const token = this._tokenService.token;
    if (!token) {
      return false
    }
    if (this._tokenService._isExpiredToken()) {
      // reload state with refresh token
      this.reloadStateRefreshToken();
      return true;
    }
    return true;
  }

  /**
   * Reload state user when token expired or not
   */
  reloadStateUser(): void {
    let token = this._tokenService.token;
    if (!token) return;

    if (this._tokenService._isExpiredToken()) {
      // reload state with refresh token
      this.reloadStateRefreshToken();
    } else {
      // Auto reload state with access token
      this.reloadStateAccessToken();
    }
    this._store.dispatch(UserConnectedActions.userConnected());
  }

  /**
   * Reload token && user State when refresh token
   */
  reloadStateRefreshToken(): void {
    this._store.dispatch(AuthActions.autoLogin());
    this._store.dispatch(UserConnectedActions.userConnected());
  }

  /**
   * Reload ConnectState when user token not expired
   */
  reloadStateAccessToken(): void {
    let decoded = this._tokenService.decode(this._tokenService.getAccessToken());
    this._store.dispatch(AuthActions.loginSuccess({
      payload: {
        id: decoded.id,
        access_token: this._tokenService.getAccessToken(),
        refresh_token: this._tokenService.getRefreshToken(),
        is_admin: decoded.is_admin,
        is_owner: decoded.is_owner,
        is_customer: decoded.is_customer
      }
    }));
  }

  /**
   * verify owner privileges
   */
  isOwner(): boolean {
    // for owner connection
    if (!this.check()) {
      this._router.navigate(['/auth/signin']);
      return false;
    }
    // Decoded token
    let decoded: DecodedInterface = this._tokenService.decode(this._tokenService.getAccessToken());
    return decoded.is_owner;
  }

  /**
   * Verify owner privileges
   */
  isAdmin(): boolean {
    // for owner connection
    if (!this.check()) {
      this._router.navigate(['/auth/signin']);
      return false;
    }
    // Decoded token
    let decoded: DecodedInterface = this._tokenService.decode(this._tokenService.getAccessToken());
    return decoded.is_admin;
  }

  /**
   * verify owner privileges
   */
  isCustomer(): boolean {
    // for owner connection
    if (!this.check()) {
      this._router.navigate(['/auth/signin']);
      return false;
    }
    // Decoded token
    let decoded: DecodedInterface = this._tokenService.decode(this._tokenService.getAccessToken());
    return decoded.is_customer;
  }


  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}

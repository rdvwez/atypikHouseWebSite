import {createAction, props} from '@ngrx/store';
import {ConnectState} from '../auth.state';
import {CredentialInterface} from '../../interfaces/auth.interface';

export namespace AuthActions {
  // Auth state
  export enum AuthActionsType {
    AUTH_LOGIN = '[AUTH] LOGIN',
    AUTH_LOGIN_SUCCESS = '[AUTH] LOGIN_SUCCESS',
    AUTH_AUTOLOGIN = '[AUTH] AUTOLOGIN',
    AUTH_AUTOLOGIN_SUCCESS = '[AUTH] AUTOLOGIN_SUCCESS',
    // logout
    AUTH_LOGOUT = '[AUTH] LOGOUT',
    AUTH_ERROR = '[AUTH] ERROR',
    AUTH_LOGOUT_SUCCESS = '[AUTH] LOGOUT_SUCCESS',
    // Register
    AUTH_REGISTER = '[AUTH] REGISTER',
    // sso login with google
    AUTH_GOOGLE_LOGIN = '[AUTH] GOOGLE_LOGIN',
  }

  // login user
  export const login = createAction(
    AuthActions.AuthActionsType.AUTH_LOGIN,
    props<{ credential: CredentialInterface }>()
  );
  export const loginSuccess = createAction(
    AuthActions.AuthActionsType.AUTH_LOGIN_SUCCESS,
    props<{ payload: ConnectState }>()
  );
  // auto login
  export const autoLogin = createAction(
    AuthActions.AuthActionsType.AUTH_AUTOLOGIN
  );

  export const autoLoginSuccess = createAction(
    AuthActions.AuthActionsType.AUTH_AUTOLOGIN_SUCCESS,
    props<{ payload: ConnectState }>()
  );
  export const authLogout = createAction(
    AuthActions.AuthActionsType.AUTH_LOGOUT
  );

  export const authLogOutSuccess = createAction(
    AuthActions.AuthActionsType.AUTH_LOGOUT_SUCCESS
  );
  export const errorAuth = createAction(
    AuthActions.AuthActionsType.AUTH_ERROR,
    props<{ error: string }>()
  );

  export const authRegister = createAction(
    AuthActions.AuthActionsType.AUTH_REGISTER,
    props<{ credential: CredentialInterface }>()
  );

  export const loginGoogle = createAction(
    AuthActions.AuthActionsType.AUTH_GOOGLE_LOGIN,
    props<{ tempToken: string }>()
  );
}

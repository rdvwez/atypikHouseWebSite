import {createReducer, on} from '@ngrx/store';
import {AuthActions} from '../actions/auth.action';
import {ConnectState} from '../auth.state';

export namespace authReducer {

  export const initialState: ConnectState = {
    id: null,
    access_token: '',
    refresh_token: '',
    is_owner: false,
    is_customer: false,
    is_admin: false,
    error: '',
    loading: false
  }

  export const reducer = createReducer(
    initialState,
    on(AuthActions.login, (state, action) => {
      return {
        ...state,
        loading: true
      };
    }),
    on(AuthActions.loginSuccess, AuthActions.autoLoginSuccess, (state, {payload}) => {
      return {
        ...state,
        id: payload.id,
        access_token: payload.access_token,
        refresh_token: payload.refresh_token,
        is_admin: payload.is_admin,
        is_customer: payload.is_customer,
        is_owner: payload.is_owner,
        loading: false
      }
    }),
    on(AuthActions.authLogOutSuccess, (state, action) => {
      return initialState;
    }),
    on(AuthActions.errorAuth, (state, {error}) => {
      return {
        ...state,
        error,
        loading: false
      }
    })
  );
}

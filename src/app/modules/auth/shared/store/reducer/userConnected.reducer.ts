import {UserConnectedState} from '../auth.state';
import {createReducer, on} from '@ngrx/store';
import {UserConnectedActions} from '../actions/userConnected.action';

export namespace userConnectedReducer {

  const initialState: UserConnectedState = {
    user: undefined,
    isAuthenticated: false,
    error: ''
  }

  export const reducer = createReducer(
    initialState,
    on(UserConnectedActions.userConnectedSuccess, (state, {user}) => {
      return {
        ...state,
        isAuthenticated: true,
        user,
        error: ''
      }
    }),
    on(UserConnectedActions.userConnectedError, (state, {error}) => {
      return {
        ...state,
        isAuthenticated: false,
        error
      }
    }),
    on(UserConnectedActions.userDisconnect, () => {
      return initialState;
    })
  );
}

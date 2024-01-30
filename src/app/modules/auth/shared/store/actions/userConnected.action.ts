import {createAction, props} from '@ngrx/store';
import {UserInterface} from '../../../../admin/users/shared/model/user.interface';

export namespace UserConnectedActions {
  // action types
  export enum UserConnectedActionType {
    USER_CONNECTED = '[USER_CONNECTED] INVOKE',
    USER_CONNECTED_SUCCESS = '[USER_CONNECTED] SUCCESS',
    USER_CONNECTED_ERROR = '[USER_CONNECTED] ERROR',
    USER_DISCONNECT = '[USER_CONNECTED] DISCONNECTED',
  }

  // actions
  export const userConnected = createAction(
    UserConnectedActions.UserConnectedActionType.USER_CONNECTED
  );
  export const userConnectedSuccess = createAction(
    UserConnectedActions.UserConnectedActionType.USER_CONNECTED_SUCCESS,
    props<{ user: UserInterface }>()
  );
  export const userConnectedError = createAction(
    UserConnectedActions.UserConnectedActionType.USER_CONNECTED_ERROR,
    props<{ error: string }>()
  );
  export const userDisconnect = createAction(
    UserConnectedActions.UserConnectedActionType.USER_DISCONNECT,
  );
}

import {menuReducer, NAVIGATION_STATE_NAME} from '../../layout/common/navigation/store';
import {ActionReducerMap} from '@ngrx/store';
import {LOAD_STATE_NAME, loadReducer} from '../../core/components/utils/load/store';
import {AUTH_STATE_NAME, ConnectState, USER_CONNECTED_STATE, UserConnectedState} from '../../modules/auth/shared/store';
import {userConnectedReducer} from '../../modules/auth/shared/store/reducer/userConnected.reducer';
import {authReducer} from '../../modules/auth/shared/store/reducer/auth.reducer';
import {
  NAVIGATION_ADMIN_STATE,
  NavigationDashboardState,
  navigationReducer
} from '../../layout/layouts/admin-layout/shrared/store';

export interface AppState {
  [NAVIGATION_STATE_NAME]: menuReducer.NavigationState,
  [NAVIGATION_ADMIN_STATE]: NavigationDashboardState,
  [LOAD_STATE_NAME]: loadReducer.loadState,
  [USER_CONNECTED_STATE]: UserConnectedState,
  [AUTH_STATE_NAME]: ConnectState
}

export const appReducer: ActionReducerMap<AppState> = {
  [NAVIGATION_STATE_NAME]: menuReducer.reducer,
  [NAVIGATION_ADMIN_STATE]: navigationReducer._reducer,
  [LOAD_STATE_NAME]: loadReducer.reducer,
  [USER_CONNECTED_STATE]: userConnectedReducer.reducer,
  [AUTH_STATE_NAME]: authReducer.reducer
};

import {createFeatureSelector, createSelector} from '@ngrx/store';
import {UserConnectedState} from '../auth.state';

export const USER_CONNECTED_STATE = 'userConnected';

export const userConnectedSelector = createFeatureSelector<UserConnectedState>(USER_CONNECTED_STATE);
export const selectUserConnected = createSelector(userConnectedSelector, ({user}: UserConnectedState) => {
  return user;
});
export const selectIsAuthenticated = createSelector(userConnectedSelector, ({isAuthenticated}: UserConnectedState) => {
  return isAuthenticated;
});

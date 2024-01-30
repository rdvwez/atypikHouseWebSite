import {createFeatureSelector, createSelector} from '@ngrx/store';
import {ConnectState} from '../auth.state';

export const AUTH_STATE_NAME = 'auth';
export const authSelector = createFeatureSelector<ConnectState>(AUTH_STATE_NAME);
export const selectAccessToken = createSelector(authSelector, ({access_token}: ConnectState) => {
  return access_token;
});
/**
 * selector auth sign-in or sign-up error
 */
export const selectErrorAuth = createSelector(authSelector, ({error}: ConnectState) => {
  return error;
})

export const selectAuthLoading = createSelector(authSelector, ({loading}: ConnectState) => {
  return loading;
});

export const selectConnectState = createSelector(authSelector, (state: ConnectState) => {
  return state;
})

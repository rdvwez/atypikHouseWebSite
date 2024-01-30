import {createFeatureSelector, createSelector} from '@ngrx/store';
import {menuReducer} from './navigation.reducer';

export const NAVIGATION_STATE_NAME = 'navigations';
export const navigationSelector = createFeatureSelector<menuReducer.NavigationState>(NAVIGATION_STATE_NAME);

export const selectMenuNavigation = createSelector(navigationSelector, ({menus}: menuReducer.NavigationState) => {
  return menus;
})

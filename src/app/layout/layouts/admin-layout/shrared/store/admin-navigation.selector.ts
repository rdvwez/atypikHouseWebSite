import {createFeatureSelector, createSelector} from '@ngrx/store';
import {NavigationDashboardState} from './admin-navigation.state';
import {NavigationInterface} from '../model/navigation.interface';

export const NAVIGATION_ADMIN_STATE = 'dashboard-navigations';

export const menuAdminSelector = createFeatureSelector<NavigationDashboardState>(NAVIGATION_ADMIN_STATE);
export const selectAdminMenu = createSelector(menuAdminSelector, ({navigations}) => {
  return navigations;
});

export const selectAdminMenuActive = createSelector(menuAdminSelector, ({navigations}) => {
  return navigations.find((elt: NavigationInterface) => elt.isActive);
})

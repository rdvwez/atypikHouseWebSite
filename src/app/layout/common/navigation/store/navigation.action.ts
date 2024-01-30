import {createAction, props} from '@ngrx/store';
import {NavItem} from '../nav-item';

export const navigations = createAction(
  'NAVIGATION INVOKE',
  props<{ isConnected: boolean }>()
);

export const setNavigation = createAction(
  'NAVIGATION UPDATE',
  props<{ item: NavItem }>()
);

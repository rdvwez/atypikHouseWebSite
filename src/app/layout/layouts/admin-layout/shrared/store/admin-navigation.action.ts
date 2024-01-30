import {createAction, props} from '@ngrx/store';
import {NavigationInterface} from '../model/navigation.interface';
import {ModuleNavigationEnum} from './admin-navigation.state';

export namespace NavigationActions {
  // types navigations
  export enum NavigationActionsType {
    NAVIGATION_INVOKE = '[DASHBOARD_NAVIGATION] NAVIGATION_INVOKE',
    SET_NAVIGATION = '[DASHBOARD_NAVIGATION] SET_NAVIGATION',
    URL_ACTIVATED = '[DASHBOARD_NAVIGATION] URL_ACTIVATED',
  }

  export const navigationInvoke = createAction(
    NavigationActionsType.NAVIGATION_INVOKE,
    props<{ module: ModuleNavigationEnum }>()
  );

  export const setNavigation = createAction(
    NavigationActionsType.SET_NAVIGATION,
    props<{ item: NavigationInterface }>()
  );

  export const activatedUrl = createAction(
    NavigationActionsType.URL_ACTIVATED,
    props<{ url: string }>()
  );
}

import {ADMIN_DASHBOARD, CLIENT_DASHBOARD, OWNER_DASHBOARD} from '../constant/data';
import {createReducer, on} from '@ngrx/store';
import {ModuleNavigationEnum, NavigationDashboardState} from './admin-navigation.state';
import {NavigationActions} from './admin-navigation.action';
import {NavigationInterface} from '../model/navigation.interface';


export namespace navigationReducer {
  const initialState: NavigationDashboardState = {
    navigations: ADMIN_DASHBOARD,
    module: ModuleNavigationEnum.ADMIN
  }

  export const _reducer = createReducer(
    initialState,
    on(NavigationActions.navigationInvoke, (state, {module}) => {
      let dashboard = [];
      switch (module) {
        case ModuleNavigationEnum.ADMIN:
          dashboard = ADMIN_DASHBOARD;
          break;
        case ModuleNavigationEnum.VISITOR:
          dashboard = CLIENT_DASHBOARD
          break;
        case ModuleNavigationEnum.OWNER:
          dashboard = OWNER_DASHBOARD
          break;
      }
      return {
        ...state,
        navigations: dashboard
      }
    }),
    on(NavigationActions.setNavigation, (state, {item}) => {
      return {
        ...state,
        navigations: state.navigations.map((elt: NavigationInterface) => {
          return {...elt, isActive: elt.id === item.id}
        })
      }
    }),
    on(NavigationActions.activatedUrl, (state, {url}) => {
      return {
        ...state,
        navigations: state.navigations.map((elt: NavigationInterface) => {
          return {...elt, isActive: elt.path === url}
        })
      }
    })
  );
}

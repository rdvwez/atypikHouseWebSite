import {NavItem} from '../nav-item';
import {NAVIGATION_CONNECTED_CONST, NAVIGATION_NOT_CONNECTED_CONST} from '../data';
import {createReducer, on} from '@ngrx/store';
import {navigations, setNavigation} from './navigation.action';

export namespace menuReducer {

  export interface NavigationState {
    menus: NavItem[]
  }

  export const initialState = {
    menus: NAVIGATION_NOT_CONNECTED_CONST
  };

  export const reducer = createReducer(
    initialState,
    on(navigations, (state, {isConnected}) => {
      return {
        ...state,
        menus: isConnected ? NAVIGATION_CONNECTED_CONST : NAVIGATION_NOT_CONNECTED_CONST
      };
    }),
    on(setNavigation, (state, {item}) => {
      return {
        ...state,
        menus: state.menus.map((elt: NavItem) => {
          return {
            ...elt,
            isActive: elt.id === item.id,
          }
        })
      }
    })
  )
}

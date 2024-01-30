import {createReducer, on} from '@ngrx/store';
import {HouseAction} from './house.action';
import {HouseState} from './house.state';
import {HouseInterface} from '../model/house.interface';

export namespace houseReducer {

  export const initialState: HouseState = {
    houses: [],
    error: '',
    filter: '',
    selected: null,
    total: 0,
    offset: 1,
    pageSize: 9
  };

  export const reducer = createReducer(
    initialState,
    on(HouseAction.listHouseSuccess,
      HouseAction.searchHouseSuccess, (state, {houses}) => {
        return {
          ...state,
          houses,
          total: houses.length,
          offset: 1,
          pageSize: 9
        };
      }),
    on(HouseAction.getHouseSuccess, (state, {house}) => {
      return {
        ...state,
        selected: house,
        error: ''
      }
    }),
    on(HouseAction.addHouseSuccess, (state, {house}) => {
      return {
        ...state,
        houses: [...state.houses, house]
      };
    }),
    on(HouseAction.updateHouseSuccess, (state, {house}) => {
      return {
        ...state,
        houses: state.houses.map((elt: HouseInterface) => elt.id == house.id ? house : elt)
      };
    }),
    on(HouseAction.deleteHouseSuccess, (state, {id}) => {
      return {
        ...state,
        houses: state.houses.filter((elt: HouseInterface) => elt.id !== id)
      }
    }),
    on(HouseAction.setFilter, (state, {filter}) => {
      return {
        ...state,
        filter
      }
    }),
    on(HouseAction.listHouseError,
      HouseAction.getHouseError,
      HouseAction.updateHouseError,
      HouseAction.searchHouseError,
      HouseAction.deleteHouseError,
      (state, {error}) => {
        return {
          ...state,
          error
        }
      }),
  );
}

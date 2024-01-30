import {createAction, props} from '@ngrx/store';
import {HouseInterface} from '../model/house.interface';
import {SearchHouseInterface} from '../../../../destinations/shared/interface/destination.interface';

export namespace HouseAction {

  // type actions
  export enum HouseActionTypes {

    // list
    LIST_HOUSE_INVOKE = '[HOUSE] LIST_INVOKE',
    LIST_HOUSE_SUCCESS = '[HOUSE] LIST_SUCCESS',
    LIST_HOUSE_ERROR = '[HOUSE] LIST_ERROR',

    // Add
    ADD_HOUSE_INVOKE = '[HOUSE] ADD_INVOKE',
    ADD_HOUSE_SUCCESS = '[HOUSE] ADD_SUCCESS',
    ADD_HOUSE_ERROR = '[HOUSE] ADD_ERROR',

    // Get
    GET_HOUSE_INVOKE = '[HOUSE] GET_INVOKE',
    GET_HOUSE_SUCCESS = '[HOUSE] GET_SUCCESS',
    GET_HOUSE_ERROR = '[HOUSE] GET_ERROR',

    // Delete
    DELETE_HOUSE_INVOKE = '[HOUSE] DELETE_INVOKE',
    DELETE_HOUSE_SUCCESS = '[HOUSE] DELETE_SUCCESS',
    DELETE_HOUSE_ERROR = '[HOUSE] DELETE_ERROR',

    // Update
    UPDATE_HOUSE_INVOKE = '[HOUSE] UPDATE_INVOKE',
    UPDATE_HOUSE_SUCCESS = '[HOUSE] UPDATE_SUCCESS',
    UPDATE_HOUSE_ERROR = '[HOUSE] UPDATE_ERROR',

    // Search
    SEARCH_HOUSE_INVOKE = '[HOUSE] SEARCH_INVOKE',
    SEARCH_HOUSE_SUCCESS = '[HOUSE] SEARCH_SUCCESS',
    SEARCH_HOUSE_ERROR = '[HOUSE] SEARCH_ERROR',

    // set filter
    SET_FILTER = '[HOUSE] SET_FILTER'
  }

  // list house
  export const listHouse = createAction(
    HouseActionTypes.LIST_HOUSE_INVOKE,
  );
  export const listHouseSuccess = createAction(
    HouseActionTypes.LIST_HOUSE_SUCCESS,
    props<{ houses: HouseInterface[] }>()
  );
  export const listHouseError = createAction(
    HouseActionTypes.LIST_HOUSE_ERROR,
    props<{ error: string }>()
  );

  // Add
  export const addHouse = createAction(
    HouseActionTypes.ADD_HOUSE_INVOKE,
    props<{ house: HouseInterface }>()
  );
  export const addHouseSuccess = createAction(
    HouseActionTypes.ADD_HOUSE_SUCCESS,
    props<{ house: HouseInterface }>()
  );
  export const addHouseError = createAction(
    HouseActionTypes.ADD_HOUSE_ERROR,
    props<{ error: string }>()
  );

  // update
  export const updateHouse = createAction(
    HouseActionTypes.UPDATE_HOUSE_INVOKE,
    props<{ house: HouseInterface }>()
  );
  export const updateHouseSuccess = createAction(
    HouseActionTypes.UPDATE_HOUSE_SUCCESS,
    props<{ house: HouseInterface }>()
  );
  export const updateHouseError = createAction(
    HouseActionTypes.UPDATE_HOUSE_ERROR,
    props<{ error: string }>()
  );

  // delete
  export const deleteHouse = createAction(
    HouseActionTypes.DELETE_HOUSE_INVOKE,
    props<{ id: number }>()
  );
  export const deleteHouseSuccess = createAction(
    HouseActionTypes.DELETE_HOUSE_SUCCESS,
    props<{ id: number }>()
  );
  export const deleteHouseError = createAction(
    HouseActionTypes.DELETE_HOUSE_ERROR,
    props<{ error: string }>()
  );

  // Search house
  export const searchHouse = createAction(
    HouseActionTypes.SEARCH_HOUSE_INVOKE,
    props<{ payload: SearchHouseInterface }>()
  );
  export const searchHouseSuccess = createAction(
    HouseActionTypes.SEARCH_HOUSE_SUCCESS,
    props<{ houses: HouseInterface[] }>()
  );
  export const searchHouseError = createAction(
    HouseActionTypes.SEARCH_HOUSE_ERROR,
    props<{ error: string }>()
  );

  // get
  export const getHouse = createAction(
    HouseActionTypes.GET_HOUSE_INVOKE,
    props<{ id: number }>()
  );
  export const getHouseSuccess = createAction(
    HouseActionTypes.GET_HOUSE_SUCCESS,
    props<{ house: HouseInterface }>()
  );
  export const getHouseError = createAction(
    HouseActionTypes.GET_HOUSE_ERROR,
    props<{ error: string }>()
  );
  export const setFilter = createAction(
    HouseActionTypes.SET_FILTER,
    props<{ filter: string }>()
  );
}

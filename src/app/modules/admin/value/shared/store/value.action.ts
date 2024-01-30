import {createAction, props} from '@ngrx/store';
import {ValueInterface} from '../model/value.interface';

export namespace ValueAction {

  // type actions
  export enum ValueActionType {
    // list
    LIST_VALUE_INVOKE = '[VALUE] LIST_INVOKE',
    LIST_VALUE_SUCCESS = '[VALUE] LIST_SUCCESS',
    LIST_VALUE_ERROR = '[VALUE] LIST_ERROR',
    // add
    ADD_VALUE_INVOKE = '[VALUE] ADD_INVOKE',
    ADD_VALUE_SUCCESS = '[VALUE] ADD_SUCCESS',
    ADD_VALUE_ERROR = '[VALUE] ADD_ERROR',
    // update
    UPDATE_VALUE_INVOKE = '[VALUE] UPDATE_INVOKE',
    UPDATE_VALUE_SUCCESS = '[VALUE] UPDATE_SUCCESS',
    UPDATE_VALUE_ERROR = '[VALUE] UPDATE_ERROR',
    // delete
    DELETE_VALUE_INVOKE = '[VALUE] DELETE_INVOKE',
    DELETE_VALUE_SUCCESS = '[VALUE] DELETE_SUCCESS',
    DELETE_VALUE_ERROR = '[VALUE] DELETE_ERROR',
    // set filter
    SET_FILTER = '[VALUE] SET_FILTER',
  }

  // list
  export const listValue = createAction(
    ValueActionType.LIST_VALUE_INVOKE
  );
  export const listValueSuccess = createAction(
    ValueActionType.LIST_VALUE_SUCCESS,
    props<{ values: ValueInterface[] }>()
  );
  export const listValueError = createAction(
    ValueActionType.LIST_VALUE_ERROR,
    props<{ error: string }>()
  );

  // add
  export const addValue = createAction(
    ValueActionType.ADD_VALUE_INVOKE,
    props<{ value: ValueInterface }>()
  );
  export const addValueSuccess = createAction(
    ValueActionType.ADD_VALUE_SUCCESS,
    props<{ value: ValueInterface }>()
  );
  export const addValueError = createAction(
    ValueActionType.ADD_VALUE_ERROR,
    props<{ error: string }>()
  );

  // update
  export const updateValue = createAction(
    ValueActionType.UPDATE_VALUE_INVOKE,
    props<{ value: ValueInterface }>()
  );
  export const updateValueSuccess = createAction(
    ValueActionType.UPDATE_VALUE_SUCCESS,
    props<{ value: ValueInterface }>()
  );
  export const updateValueError = createAction(
    ValueActionType.UPDATE_VALUE_ERROR,
    props<{ error: string }>()
  );

  // delete
  export const deleteValue = createAction(
    ValueActionType.DELETE_VALUE_INVOKE,
    props<{ id: number }>()
  );
  export const deleteValueSuccess = createAction(
    ValueActionType.DELETE_VALUE_SUCCESS,
    props<{ id: number }>()
  );
  export const deleteValueError = createAction(
    ValueActionType.DELETE_VALUE_ERROR,
    props<{ error: string }>()
  );

  // Set filter
  export const setFilter = createAction(
    ValueActionType.SET_FILTER,
    props<{ filter: string }>()
  );
}

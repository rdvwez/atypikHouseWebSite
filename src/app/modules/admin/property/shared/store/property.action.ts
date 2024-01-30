import {createAction, props} from '@ngrx/store';
import {PropertyInterface} from '../model/property.interface';

export namespace PropertyAction {

  // actions type
  export enum PropertyActionType {
    // list
    LIST_PROPERTY_INVOKE = '[PROPERTY] LIST_INVOKE',
    LIST_PROPERTY_SUCCESS = '[PROPERTY] LIST_SUCCESS',
    LIST_PROPERTY_ERROR = '[PROPERTY] LIST_ERROR',
    // add
    ADD_PROPERTY_INVOKE = '[PROPERTY] ADD_INVOKE',
    ADD_PROPERTY_SUCCESS = '[PROPERTY] ADD_SUCCESS',
    ADD_PROPERTY_ERROR = '[PROPERTY] ADD_ERROR',
    // update
    UPDATE_PROPERTY_INVOKE = '[PROPERTY] UPDATE_INVOKE',
    UPDATE_PROPERTY_SUCCESS = '[PROPERTY] UPDATE_SUCCESS',
    UPDATE_PROPERTY_ERROR = '[PROPERTY] UPDATE_ERROR',
    // delete
    DELETE_PROPERTY_INVOKE = '[PROPERTY] DELETE_INVOKE',
    DELETE_PROPERTY_SUCCESS = '[PROPERTY] DELETE_SUCCESS',
    DELETE_PROPERTY_ERROR = '[PROPERTY] DELETE_ERROR',
    SET_FILTER = '[PROPERTY] SET_FILTER',
  }

  // list actions
  export const listProperty = createAction(
    PropertyActionType.LIST_PROPERTY_INVOKE
  );
  export const listPropertySuccess = createAction(
    PropertyActionType.LIST_PROPERTY_SUCCESS,
    props<{ properties: PropertyInterface[] }>()
  );
  export const listPropertyError = createAction(
    PropertyActionType.LIST_PROPERTY_ERROR,
    props<{ error: string }>()
  );

  // add actions
  export const addProperty = createAction(
    PropertyActionType.ADD_PROPERTY_INVOKE,
    props<{ property: PropertyInterface }>()
  );
  export const addPropertySuccess = createAction(
    PropertyActionType.ADD_PROPERTY_SUCCESS,
    props<{ property: PropertyInterface }>()
  );
  export const addPropertyError = createAction(
    PropertyActionType.ADD_PROPERTY_ERROR,
    props<{ error: string }>()
  );

  // update actions
  export const updateProperty = createAction(
    PropertyActionType.UPDATE_PROPERTY_INVOKE,
    props<{ property: PropertyInterface }>()
  );
  export const updatePropertySuccess = createAction(
    PropertyActionType.UPDATE_PROPERTY_SUCCESS,
    props<{ property: PropertyInterface }>()
  );
  export const updatePropertyError = createAction(
    PropertyActionType.UPDATE_PROPERTY_ERROR,
    props<{ error: string }>()
  );

  // delete actions
  export const deleteProperty = createAction(
    PropertyActionType.DELETE_PROPERTY_INVOKE,
    props<{ id: number }>()
  );
  export const deletePropertySuccess = createAction(
    PropertyActionType.DELETE_PROPERTY_SUCCESS,
    props<{ id: number }>()
  );
  export const deletePropertyError = createAction(
    PropertyActionType.DELETE_PROPERTY_ERROR,
    props<{ error: string }>()
  );

  export const setFilter = createAction(
    PropertyActionType.SET_FILTER,
    props<{ filter: string }>()
  );
}

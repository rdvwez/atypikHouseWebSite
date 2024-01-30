import {createAction, props} from '@ngrx/store';
import {UserInterface} from '../model/user.interface';

export namespace UsersAction {

  // actions type
  export enum UsersActionTypes {
    // list
    LIST_USERS_INVOKE = '[USERS] LIST_INVOKE',
    LIST_USERS_SUCCESS = '[USERS] LIST_SUCCESS',
    LIST_USERS_ERROR = '[USERS] LIST_ERROR',
    // add
    ADD_USERS_INVOKE = '[USERS] ADD_INVOKE',
    ADD_USERS_SUCCESS = '[USERS] ADD_SUCCESS',
    ADD_USERS_ERROR = '[USERS] ADD_ERROR',
    // update
    UPDATE_USERS_INVOKE = '[USERS] UPDATE_INVOKE',
    UPDATE_USERS_SUCCESS = '[USERS] UPDATE_SUCCESS',
    UPDATE_USERS_ERROR = '[USERS] UPDATE_ERROR',
    // delete
    DELETE_USERS_INVOKE = '[USERS] DELETE_INVOKE',
    DELETE_USERS_SUCCESS = '[USERS] DELETE_SUCCESS',
    DELETE_USERS_ERROR = '[USERS] DELETE_ERROR',
  }

  // list actions
  export const list = createAction(
    UsersActionTypes.LIST_USERS_INVOKE
  );
  export const listSuccess = createAction(
    UsersActionTypes.LIST_USERS_SUCCESS,
    props<{ users: UserInterface[] }>()
  );
  export const listError = createAction(
    UsersActionTypes.LIST_USERS_ERROR,
    props<{ error: string }>()
  );

  // add actions
  export const add = createAction(
    UsersActionTypes.ADD_USERS_INVOKE,
    props<{ user: UserInterface }>()
  );
  export const addSuccess = createAction(
    UsersActionTypes.ADD_USERS_SUCCESS,
    props<{ user: UserInterface }>()
  );
  export const addError = createAction(
    UsersActionTypes.ADD_USERS_ERROR,
    props<{ error: string }>()
  );

  // update actions
  export const update = createAction(
    UsersActionTypes.ADD_USERS_INVOKE,
    props<{ user: UserInterface }>()
  );
  export const updateSuccess = createAction(
    UsersActionTypes.UPDATE_USERS_SUCCESS,
    props<{ user: UserInterface }>()
  );
  export const updateError = createAction(
    UsersActionTypes.UPDATE_USERS_ERROR,
    props<{ error: string }>()
  );

  // delete actions
  export const remove = createAction(
    UsersActionTypes.DELETE_USERS_INVOKE,
    props<{ id: number }>()
  );
  export const removeSuccess = createAction(
    UsersActionTypes.DELETE_USERS_SUCCESS,
    props<{ id: number }>()
  );
  export const removeError = createAction(
    UsersActionTypes.DELETE_USERS_ERROR,
    props<{ error: string }>()
  );
}

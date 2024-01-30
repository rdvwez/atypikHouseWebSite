import {createAction, props} from '@ngrx/store';
import {ThematicInterface} from '../model/thematic.interface';

export namespace ThematicAction {
  // ACTIONS TYPE
  export enum ThematicTypeActions {
    ADD_THEMATIC_INVOKE = '[THEMATIC] ADD_INVOKE',
    ADD_THEMATIC_SUCCESS = '[THEMATIC] ADD_SUCCESS',
    ADD_THEMATIC_ERROR = '[THEMATIC] ADD_ERROR',
    // list
    LIST_THEMATIC_INVOKE = '[THEMATIC] LIST_INVOKE',
    LIST_THEMATIC_SUCCESS = '[THEMATIC] LIST_SUCCESS',
    LIST_THEMATIC_ERROR = '[THEMATIC] LIST_ERROR',
    // update
    UPDATE_THEMATIC_INVOKE = '[THEMATIC] UPDATE_INVOKE',
    UPDATE_THEMATIC_SUCCESS = '[THEMATIC] UPDATE_SUCCESS',
    UPDATE_THEMATIC_ERROR = '[THEMATIC] UPDATE_ERROR',
    // delete
    DELETE_THEMATIC_INVOKE = '[THEMATIC] DELETE_INVOKE',
    DELETE_THEMATIC_SUCCESS = '[THEMATIC] DELETE_SUCCESS',
    DELETE_THEMATIC_ERROR = '[THEMATIC] DELETE_ERROR',
  }

  // ACTIONS

  // list actions
  export const listThematic = createAction(
    ThematicTypeActions.LIST_THEMATIC_INVOKE,
  )
  export const listThematicSuccess = createAction(
    ThematicTypeActions.LIST_THEMATIC_SUCCESS,
    props<{ thematics: ThematicInterface[] }>()
  )
  export const listThematicError = createAction(
    ThematicTypeActions.LIST_THEMATIC_ERROR,
    props<{ error: string }>()
  )

  //add action
  export const addThematic = createAction(
    ThematicTypeActions.ADD_THEMATIC_INVOKE,
    props<{ thematic: ThematicInterface }>()
  );
  export const addThematicSuccess = createAction(
    ThematicTypeActions.ADD_THEMATIC_SUCCESS,
    props<{ thematic: ThematicInterface }>()
  );
  export const addThematicError = createAction(
    ThematicTypeActions.ADD_THEMATIC_ERROR,
    props<{ error: string }>()
  );

  //update action
  export const updateThematic = createAction(
    ThematicTypeActions.UPDATE_THEMATIC_INVOKE,
    props<{ thematic: ThematicInterface }>()
  );
  export const updateThematicSuccess = createAction(
    ThematicTypeActions.UPDATE_THEMATIC_SUCCESS,
    props<{ thematic: ThematicInterface }>()
  );
  export const updateThematicError = createAction(
    ThematicTypeActions.UPDATE_THEMATIC_ERROR,
    props<{ error: string }>()
  );

  //delete actions
  export const deleteThematic = createAction(
    ThematicTypeActions.DELETE_THEMATIC_INVOKE,
    props<{ id: number }>()
  );
  export const deleteThematicSuccess = createAction(
    ThematicTypeActions.DELETE_THEMATIC_SUCCESS,
    props<{ id: number }>()
  );
  export const deleteThematicError = createAction(
    ThematicTypeActions.DELETE_THEMATIC_ERROR,
    props<{ error: string }>()
  );
}

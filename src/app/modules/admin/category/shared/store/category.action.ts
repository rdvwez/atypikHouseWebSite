import {createAction, props} from '@ngrx/store';
import {CategoryInterface} from '../models/category.interface';

export namespace CategoryActions {

  export enum CategoryTypeAction {
    // ADD
    ADD_CATEGORY_INVOKE = `[CATEGORY] ADD_INVOKE`,
    ADD_CATEGORY_SUCCESS = '[CATEGORY] ADD_SUCCESS',
    ADD_CATEGORY_ERROR = '[CATEGORY] ADD_ERROR',
    // LIST
    LIST_CATEGORY_INVOKE = '[CATEGORY] LIST',
    LIST_CATEGORY_SUCCESS = '[CATEGORY] LIST_SUCCESS',
    LIST_CATEGORY_ERROR = '[CATEGORY] LIST_ERROR',
    // UPDATE
    UPDATE_CATEGORY_INVOKE = '[CATEGORY] UPDATE',
    UPDATE_CATEGORY_SUCCESS = '[CATEGORY] UPDATE_SUCCESS',
    UPDATE_CATEGORY_ERROR = '[CATEGORY] UPDATE_ERROR',
    // DELETE
    DELETE_CATEGORY_INVOKE = '[CATEGORY] DELETE',
    DELETE_CATEGORY_SUCCESS = '[CATEGORY] DELETE_SUCCESS',
    DELETE_CATEGORY_ERROR = '[CATEGORY] DELETE_ERROR',
    // GET
    GET_CATEGORY_INVOKE = '[CATEGORY] GET_INVOKE',
    GET_CATEGORY_SUCCESS = '[CATEGORY] GET_SUCCESS',
    GET_CATEGORY_ERROR = '[CATEGORY] GET_ERROR',
    // SET FILTER
    SET_FILTER_INVOKE = '[CATEGORY] SET_FILTER',
    SET_FILTER_SUCCESS = '[CATEGORY] SET_FILTER_SUCCESS',
  }

  // LIST
  export const listCategory = createAction(
    CategoryTypeAction.LIST_CATEGORY_INVOKE,
  );
  export const listCategorySuccess = createAction(
    CategoryTypeAction.LIST_CATEGORY_SUCCESS,
    props<{ categories: CategoryInterface[] }>()
  );
  export const listCategoryError = createAction(
    CategoryTypeAction.LIST_CATEGORY_ERROR,
    props<{ error: string }>()
  )

  // ADD
  export const addCategory = createAction(
    CategoryTypeAction.ADD_CATEGORY_INVOKE,
    props<{ payload: CategoryInterface }>()
  )
  export const addCategorySuccess = createAction(
    CategoryTypeAction.ADD_CATEGORY_SUCCESS,
    props<{ payload: CategoryInterface }>()
  );

  export const addCategoryError = createAction(
    CategoryTypeAction.ADD_CATEGORY_ERROR,
    props<{ error: string }>()
  );

  // UPDATE
  export const updateCategory = createAction(
    CategoryTypeAction.UPDATE_CATEGORY_INVOKE,
    props<{ payload: CategoryInterface }>()
  );

  export const updateCategorySuccess = createAction(
    CategoryTypeAction.UPDATE_CATEGORY_SUCCESS,
    props<{ payload: CategoryInterface }>()
  );

  export const updateCategoryError = createAction(
    CategoryTypeAction.UPDATE_CATEGORY_ERROR,
    props<{ error: string }>()
  );

  // DELETE
  export const deleteCategory = createAction(
    CategoryTypeAction.DELETE_CATEGORY_INVOKE,
    props<{ id: number }>()
  );
  export const deleteCategorySuccess = createAction(
    CategoryTypeAction.DELETE_CATEGORY_SUCCESS,
    props<{ id: number }>()
  );
  export const deleteCategoryError = createAction(
    CategoryTypeAction.DELETE_CATEGORY_ERROR,
    props<{ error: string }>()
  )

  // Set filter
  export const setFilter = createAction(
    CategoryTypeAction.SET_FILTER_INVOKE,
    props<{ category: CategoryInterface }>()
  );

  // Get selected
  export const getCategory = createAction(
    CategoryTypeAction.GET_CATEGORY_INVOKE,
    props<{ id: number }>()
  );
  export const getCategorySuccess = createAction(
    CategoryTypeAction.DELETE_CATEGORY_SUCCESS,
    props<{ category: CategoryInterface }>()
  );
  export const getCategoryError = createAction(
    CategoryTypeAction.GET_CATEGORY_ERROR,
    props<{ error: string }>()
  )
}

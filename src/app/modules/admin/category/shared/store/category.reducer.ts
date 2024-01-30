import {CategoryState} from './category.state';
import {createReducer, on} from '@ngrx/store';
import {CategoryInterface} from '../models/category.interface';
import {CategoryActions} from './category.action';

export namespace categoryReducer {
  export const initialState: CategoryState = {
    error: '',
    categories: [],
  }

  export const reducer = createReducer(
    initialState,
    on(CategoryActions.listCategorySuccess, (state, {categories}) => {
      return {
        ...state,
        categories
      }
    }),
    on(CategoryActions.addCategorySuccess, (state, {payload}) => {
      return {
        ...state,
        categories: [...state.categories, payload]
      }
    }),
    on(CategoryActions.updateCategorySuccess, (state, {payload}) => {
      return {
        ...state,
        categories: state.categories.map((data: CategoryInterface) => data.id === payload.id ? payload : data),
      }
    }),
    on(CategoryActions.deleteCategorySuccess, (state, {id}) => {
      return {
        ...state,
        categories: state.categories.filter((elt: CategoryInterface) => elt.id !== id)
      }
    }),
    on(CategoryActions.getCategorySuccess, (state, {category}) => {
      return {
        ...state,
        selected: category
      }
    }),
    on(CategoryActions.setFilter, (state, {category}) => {
      return {
        ...state,
        filter: category
      }
    }),
    on(CategoryActions.deleteCategoryError,
      CategoryActions.addCategoryError,
      CategoryActions.listCategoryError,
      CategoryActions.updateCategoryError,
      CategoryActions.getCategoryError,
      (state, {error}) => {
        return {
          ...state,
          error
        }
      })
  )
}

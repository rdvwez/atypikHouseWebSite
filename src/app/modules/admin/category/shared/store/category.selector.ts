import {createFeatureSelector, createSelector} from '@ngrx/store';
import {CategoryInterface} from '../models/category.interface';
import {CategoryState} from './category.state';


export const CATEGORY_STATE_NAME = 'categories';
export const CategorySelector = createFeatureSelector<CategoryState>(CATEGORY_STATE_NAME);
export const selectErrorCategory = createSelector(CategorySelector, ({error}) => {
  return error;
});
export const selectCategories = createSelector(CategorySelector, (state: CategoryState) => {
  return state.categories;
});

export const selectCategory = (id: number) => createSelector(CategorySelector,
  ({categories}: CategoryState) => categories.find((elt: CategoryInterface) => elt.id === id)
);

export const selectFilterCategory = createSelector(CategorySelector, ({filter}: CategoryState) => filter);


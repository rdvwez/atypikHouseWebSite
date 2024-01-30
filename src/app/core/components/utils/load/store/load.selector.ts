import {createFeatureSelector, createSelector} from '@ngrx/store';
import {loadReducer} from './load.reducer';

export const LOAD_STATE_NAME = 'loads';
export const loadSelector = createFeatureSelector<loadReducer.loadState>(LOAD_STATE_NAME);

export const selectLoading = createSelector(loadSelector, ({loading}: loadReducer.loadState) => {
  return loading;
})

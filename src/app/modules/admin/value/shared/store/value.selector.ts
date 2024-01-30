import {createFeatureSelector, createSelector} from '@ngrx/store';
import {ValueState} from './value.state';
import {ValueInterface} from '../model/value.interface';

export const VALUE_STATE_NAME = 'values';
export const valueSelector = createFeatureSelector<ValueState>(VALUE_STATE_NAME);

export const selectValues = createSelector(valueSelector, ({values}) => {
  return values;
});

export const selectValueError = createSelector(valueSelector, ({error}) => {
  return error;
});

export const selectValue = (id: number) => createSelector(valueSelector,
  ({values}: ValueState) => values.find((elt: ValueInterface) => elt.id === id)
);

export const selectFilter = createSelector(valueSelector, ({filter}) => {
  return filter;
});

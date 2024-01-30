import {createFeatureSelector, createSelector} from '@ngrx/store';
import {PropertyState} from './property.state';
import {PropertyInterface} from '../model/property.interface';

export const PROPERTY_STATE_NAME = 'properties';
export const propertySelector = createFeatureSelector<PropertyState>(PROPERTY_STATE_NAME);

export const selectProperties = createSelector(propertySelector, ({properties}) => {
  return properties;
});

export const selectErrorProperty = createSelector(propertySelector, ({error}) => {
  return error;
});

export const selectProperty = (id: number) => createSelector(propertySelector,
  ({properties}: PropertyState) => properties.find((elt: PropertyInterface) => elt.id === id)
);

export const selectFilterProperty = createSelector(propertySelector, ({filter}) => {
  return filter;
});

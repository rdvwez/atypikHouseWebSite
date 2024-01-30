import {PropertyState} from './property.state';
import {createReducer, on} from '@ngrx/store';
import {PropertyAction} from './property.action';
import {PropertyInterface} from '../model/property.interface';

export namespace PropertyReducer {

  export const initialState: PropertyState = {
    properties: [],
    error: ''
  };

  export const reducer = createReducer(
    initialState,
    on(PropertyAction.listPropertySuccess, (state, {properties}) => {
      return {
        ...state,
        properties
      };
    }),
    on(PropertyAction.addPropertySuccess, (state, {property}) => {
      return {
        ...state,
        properties: [...state.properties, property]
      };
    }),
    on(PropertyAction.updatePropertySuccess, (state, {property}) => {
      return {
        ...state,
        properties: state.properties.map((elt: PropertyInterface) => elt.id == property.id ? property : elt)
      }
    }),
    on(PropertyAction.deletePropertySuccess, (state, {id}) => {
      return {
        ...state,
        properties: state.properties.filter((elt: PropertyInterface) => elt.id !== id)
      }
    }),
    on(PropertyAction.setFilter, (state, {filter}) => {
      return {
        ...state,
        filter
      }
    }),
    on(PropertyAction.deletePropertyError,
      PropertyAction.addPropertyError,
      PropertyAction.updatePropertyError,
      PropertyAction.listPropertyError,
      (state, {error}) => {
        return {
          ...state,
          error
        }
      })
  )
}

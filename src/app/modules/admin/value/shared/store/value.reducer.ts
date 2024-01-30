import {createReducer, on} from '@ngrx/store';
import {ValueState} from './value.state';
import {ValueAction} from './value.action';
import {ValueInterface} from '../model/value.interface';

export namespace ValueReducer {

  export const initialState: ValueState = {
    values: [],
    error: '',
    filter: ''
  };

  export const reducer = createReducer(
    initialState,
    on(ValueAction.listValueSuccess, (state, {values}) => {
      return {
        ...state,
        values
      };
    }),
    on(ValueAction.addValueSuccess, (state, {value}) => {
      return {
        ...state,
        properties: [...state.values, value]
      };
    }),
    on(ValueAction.updateValueSuccess, (state, {value}) => {
      return {
        ...state,
        properties: state.values.map((elt: ValueInterface) => elt.id == value.id ? value : elt)
      }
    }),
    on(ValueAction.deleteValueSuccess, (state, {id}) => {
      return {
        ...state,
        values: state.values.filter((elt: ValueInterface) => elt.id !== id)
      }
    }),
    on(ValueAction.setFilter, (state, {filter}) => {
      return {
        ...state,
        filter
      }
    }),
    on(ValueAction.deleteValueError,
      ValueAction.addValueError,
      ValueAction.listValueError,
      ValueAction.updateValueError,
      (state, {error}) => {
        return {
          ...state,
          error
        }
      })
  )
}

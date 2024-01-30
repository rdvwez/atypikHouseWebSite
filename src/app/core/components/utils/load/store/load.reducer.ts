import {createReducer, on} from '@ngrx/store';
import {LoadAction} from './load.action';

export namespace loadReducer {

  export interface loadState {
    loading: boolean;
  }

  export const initialState = {
    loading: false
  }

  export const reducer = createReducer(
    initialState,
    on(LoadAction.load, (state, action) => {
      return {...state, loading: !state.loading};
    })
  )
}

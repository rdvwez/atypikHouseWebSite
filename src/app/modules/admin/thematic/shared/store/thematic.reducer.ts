import {createReducer, on} from '@ngrx/store';
import {ThematicState} from './thematic.state';
import {ThematicAction} from './thematic.action';
import {ThematicInterface} from '../model/thematic.interface';

export namespace thematicReducer {

  export const initialState: ThematicState = {
    thematics: [],
    error: ''
  };

  export const reducer = createReducer(
    initialState,
    on(ThematicAction.listThematic, (state, action) => {
      return state;
    }),
    on(ThematicAction.listThematicSuccess, (state, {thematics}) => {
      return {
        ...state,
        error: '',
        thematics
      };
    }),
    on(ThematicAction.listThematicError, (state, {error}) => {
      return {
        ...state,
        error,
        thematics: []
      };
    }),
    on(ThematicAction.addThematicSuccess, (state, {thematic}) => {
      return {
        ...state,
        thematics: [...state.thematics, thematic]
      }
    }),
    on(ThematicAction.addThematicError, (state, {error}) => {
      return {
        ...state,
        error
      }
    }),

    on(ThematicAction.updateThematicSuccess, (state, {thematic}) => {
      return {
        ...state,
        thematics: state.thematics.map((elt: ThematicInterface) => elt.id == thematic.id ? thematic : elt)
      }
    }),
    on(ThematicAction.updateThematicError, (state, {error}) => {
      return {
        ...state,
        error
      }
    }),

    on(ThematicAction.deleteThematicSuccess, (state, {id}) => {
      return {
        ...state,
        thematics: state.thematics.filter((elt: ThematicInterface) => elt.id !== id)
      }
    }),
    on(ThematicAction.deleteThematicError, (state, {error}) => {
      return {
        ...state,
        error
      }
    })
  )
}

import {createFeatureSelector, createSelector} from '@ngrx/store';
import {ThematicState} from './thematic.state';
import {ThematicInterface} from '../model/thematic.interface';

export const THEMATIC_STATE_NAME = 'thematics';
export const thematicSelector = createFeatureSelector<ThematicState>(THEMATIC_STATE_NAME);

export const selectErrorThematic = createSelector(thematicSelector, ({error}: ThematicState) => {
  return error;
});

export const selectThematics = createSelector(thematicSelector, ({thematics}: ThematicState) => {
  return thematics;
});

export const selectThematic = (id: number) => createSelector(thematicSelector,
  ({thematics}: ThematicState) => thematics.find((elt: ThematicInterface) => elt.id === id)
);

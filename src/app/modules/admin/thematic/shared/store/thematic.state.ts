import {ThematicInterface} from '../model/thematic.interface';

export interface ThematicState {
  thematics: ReadonlyArray<ThematicInterface>;
  error: string;
}

import {PropertyInterface} from '../model/property.interface';

export interface PropertyState {
  properties: ReadonlyArray<PropertyInterface>,
  error: string;
  filter?: string;
}

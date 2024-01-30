import {ValueInterface} from '../model/value.interface';

export interface ValueState {
  values: ReadonlyArray<ValueInterface>;
  error: string;
  filter?: string;
}

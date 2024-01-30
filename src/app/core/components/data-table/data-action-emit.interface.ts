import {ActionTableEnum} from './action-table.enum';

export interface DataActionEmitInterface<T> {
  data: T;
  action: ActionTableEnum;
}

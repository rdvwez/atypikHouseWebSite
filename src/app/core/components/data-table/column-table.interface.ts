import {ActionTableEnum} from './action-table.enum';

export interface ColumnTableInterface<T> {
  headerName: string,
  fieldName: keyof T,
  isModelProperty?: boolean,
}

export interface TableActionEmitInterface<T> {
  element: T,
  action: ActionTableEnum
}

import {ResourceInterface} from './resource.interface';

export interface ResourceListInterface<T extends ResourceInterface> {
  datas: T[];
  total: number;
  limit: number;
  skip: number;
}

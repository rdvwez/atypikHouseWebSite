import {HouseInterface} from '../model/house.interface';

export interface HouseState {
  error: string;
  houses: ReadonlyArray<HouseInterface>;
  selected?: HouseInterface | null;
  filter?: string;
  total: number;
  offset: number;
  pageSize: number;
}

import {createFeatureSelector, createSelector} from '@ngrx/store';
import {HouseInterface} from '../model/house.interface';
import {HouseState} from './house.state';

export const HOUSE_STATE_NAME = 'houses';
export const selectHouseSelector = createFeatureSelector<HouseState>(HOUSE_STATE_NAME);

export const selectErrorHouse = createSelector(selectHouseSelector, ({error}: HouseState) => {
  return error;
});

export const selectHouses = (page: number = 1, pageSize = 9) => createSelector(selectHouseSelector,
  ({houses}: HouseState) => {
    return paginate(houses, page, pageSize);
  });

export const selectTotalHouses = createSelector(selectHouseSelector, ({total}: HouseState) => {
  return total;
});

export const selectHouseById = (houseId: number) => createSelector(selectHouseSelector, ({houses}: HouseState) => {
  return houses.find((elt: HouseInterface) => elt.id == houseId);
});

export const selectSelectedHouse = createSelector(selectHouseSelector, ({selected}: HouseState) => {
  return selected;
})
const paginate = (datas: ReadonlyArray<any>, offset: number, pageSize: number) => {
  return datas.slice((offset - 1) * pageSize, (pageSize * offset));
};

export const selectFilterHouse = createSelector(selectHouseSelector, ({filter}) => {
  return filter;
})

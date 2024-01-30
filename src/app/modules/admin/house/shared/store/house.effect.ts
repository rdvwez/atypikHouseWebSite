import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, concatMap, mergeMap, of, switchMap} from 'rxjs';
import {LoadAction} from '../../../../../core/components/utils/load/store';
import {HouseService} from '../service/house.service';
import {HouseAction} from './house.action';
import {HouseInterface} from '../model/house.interface';
import {RESPONSE_SERVER_CONST} from '../../../../../shared/constant/response-server.constant';
import {SearchHouseInterface} from '../../../../destinations/shared/interface/destination.interface';
import {HttpErrorResponse} from '@angular/common/http';

@Injectable()
export class HouseEffect {

  constructor(
    private _store: Store,
    private _action$: Actions,
    private _houseService: HouseService
  ) {
  }

  list$ = createEffect(() => {
    return this._action$.pipe(
      ofType(HouseAction.HouseActionTypes.LIST_HOUSE_INVOKE),
      mergeMap((data: { type: HouseAction.HouseActionTypes.LIST_HOUSE_INVOKE }) => {
          this._store.dispatch(LoadAction.load());
          return this._houseService.list()
            .pipe(
              concatMap((houses: HouseInterface[]) => ([LoadAction.load(), HouseAction.listHouseSuccess({houses})])),
              catchError((error: HttpErrorResponse) => ([LoadAction.load(), HouseAction.listHouseError({error: error.message})]))
            )
        }
      )
    )
  }, {dispatch: true});

  search$ = createEffect(() => {
    return this._action$.pipe(
      ofType(HouseAction.HouseActionTypes.SEARCH_HOUSE_INVOKE),
      mergeMap((data: { type: HouseAction.HouseActionTypes.SEARCH_HOUSE_INVOKE, payload: SearchHouseInterface }) => {
          this._store.dispatch(LoadAction.load());
          return this._houseService.searchCustom(data.payload).pipe(
            concatMap((houses: HouseInterface[]) => ([LoadAction.load(), HouseAction.searchHouseSuccess({houses})])),
            catchError(() => ([LoadAction.load(), HouseAction.searchHouseError({error: RESPONSE_SERVER_CONST.error.search})]))
          )
        }
      )
    )
  }, {dispatch: true})

  get$ = createEffect(() => {
    return this._action$.pipe(
      ofType(HouseAction.HouseActionTypes.GET_HOUSE_INVOKE),
      mergeMap((data: { type: HouseAction.HouseActionTypes.GET_HOUSE_INVOKE, id: number }) => {
          this._store.dispatch(LoadAction.load());
          return this._houseService.read(data.id)
            .pipe(
              concatMap((house: HouseInterface) => ([LoadAction.load(), HouseAction.getHouseSuccess({house})])),
              catchError(() => ([LoadAction.load(), HouseAction.getHouseError({error: RESPONSE_SERVER_CONST.error.search})]))
            )
        }
      )
    )
  }, {dispatch: true})

  update$ = createEffect(() => {
    return this._action$.pipe(
      ofType(HouseAction.HouseActionTypes.UPDATE_HOUSE_INVOKE),
      mergeMap((data: { type: HouseAction.HouseActionTypes.UPDATE_HOUSE_INVOKE, house: HouseInterface }) =>
        of(LoadAction.load()).pipe(
          switchMap(() =>
            this._houseService.update(data.house)
              .pipe(
                concatMap((house: HouseInterface) => ([LoadAction.load(), HouseAction.updateHouseSuccess({house})])),
                catchError(() => ([LoadAction.load(), HouseAction.updateHouseError({error: RESPONSE_SERVER_CONST.error.update})]))
              )
          )
        )
      )
    )
  }, {dispatch: true});

  add$ = createEffect(() => {
    return this._action$.pipe(
      ofType(HouseAction.HouseActionTypes.ADD_HOUSE_INVOKE),
      mergeMap((data: { type: HouseAction.HouseActionTypes.ADD_HOUSE_INVOKE, house: HouseInterface }) => {
          this._store.dispatch(LoadAction.load());
          return this._houseService.create(data.house)
            .pipe(
              concatMap((house: HouseInterface) => ([LoadAction.load(), HouseAction.addHouseSuccess({house})])),
              catchError(() => ([LoadAction.load(), HouseAction.addHouseError({error: RESPONSE_SERVER_CONST.error.add})]))
            )
        }
      )
    )
  }, {dispatch: true});

  delete$ = createEffect(() => {
    return this._action$.pipe(
      ofType(HouseAction.HouseActionTypes.DELETE_HOUSE_INVOKE),
      mergeMap((data: { type: HouseAction.HouseActionTypes.DELETE_HOUSE_INVOKE, id: number }) => {
          this._store.dispatch(LoadAction.load());
          return this._houseService.delete(data.id)
            .pipe(
              concatMap(() => ([LoadAction.load(), HouseAction.deleteHouseSuccess({id: data.id})])),
              catchError(() => ([LoadAction.load(), HouseAction.deleteHouseError({error: RESPONSE_SERVER_CONST.error.delete})]))
            )
        }
      )
    )
  }, {dispatch: true});
}

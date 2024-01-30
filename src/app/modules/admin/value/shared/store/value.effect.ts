import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {Actions, createEffect, ofType} from '@ngrx/effects';

import {catchError, concatMap, mergeMap} from 'rxjs';
import {LoadAction} from '../../../../../core/components/utils/load/store';
import {RESPONSE_SERVER_CONST} from '../../../../../shared/constant/response-server.constant';
import {ValueState} from './value.state';
import {ValueAction} from './value.action';
import {ValueService} from '../service/value.service';
import {ValueInterface} from '../model/value.interface';

@Injectable()
export class ValueEffect {

  constructor(
    private _store: Store<ValueState>,
    private _action$: Actions,
    private _valueService: ValueService
  ) {
  }

  list$ = createEffect(() => {
    return this._action$.pipe(
      ofType(ValueAction.ValueActionType.LIST_VALUE_INVOKE),
      mergeMap((data: { type: ValueAction.ValueActionType.LIST_VALUE_INVOKE }) => {
        this._store.dispatch(LoadAction.load())
        return this._valueService.list()
          .pipe(
            concatMap((values: ValueInterface[]) => ([LoadAction.load(), ValueAction.listValueSuccess({values})])),
            catchError(() => ([LoadAction.load(), ValueAction.listValueError({error: RESPONSE_SERVER_CONST.error.list})]))
          )
      })
    )
  }, {dispatch: true})

  add$ = createEffect(() => {
    return this._action$.pipe(
      ofType(ValueAction.ValueActionType.ADD_VALUE_INVOKE),
      mergeMap((data: { type: ValueAction.ValueActionType.ADD_VALUE_INVOKE, value: ValueInterface }) => {
        this._store.dispatch(LoadAction.load());
        return this._valueService.create(data.value)
          .pipe(
            concatMap((value: ValueInterface) => ([LoadAction.load(), ValueAction.addValueSuccess({value})])),
            catchError(() => ([LoadAction.load(), ValueAction.addValueError({error: RESPONSE_SERVER_CONST.error.add})]))
          )
      })
    )
  }, {dispatch: true})

  update$ = createEffect(() => {
    return this._action$.pipe(
      ofType(ValueAction.ValueActionType.UPDATE_VALUE_INVOKE),
      mergeMap((data: { type: string, value: ValueInterface }) => {
        this._store.dispatch(LoadAction.load());
        return this._valueService.update(data.value).pipe(
          concatMap((value: ValueInterface) => ([LoadAction.load(), ValueAction.updateValueSuccess({value})])),
          catchError(() => ([
            LoadAction.load(), ValueAction.updateValueError({error: RESPONSE_SERVER_CONST.error.update})]))
        )
      })
    )
  }, {dispatch: true});

  delete$ = createEffect(() => {
    return this._action$.pipe(
      ofType(ValueAction.ValueActionType.DELETE_VALUE_INVOKE),
      mergeMap((data: { type: ValueAction.ValueActionType.DELETE_VALUE_SUCCESS, id: number }) => {
        this._store.dispatch(LoadAction.load());
        return this._valueService.delete(data.id).pipe(
          concatMap(() => ([LoadAction.load(), ValueAction.deleteValueSuccess({id: data.id})])),
          catchError(() => ([LoadAction.load(), ValueAction.deleteValueError({error: RESPONSE_SERVER_CONST.error.delete})]))
        )
      })
    )
  }, {dispatch: true});
}

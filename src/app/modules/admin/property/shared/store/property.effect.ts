import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {PropertyService} from '../service/property.service';
import {PropertyState} from './property.state';
import {PropertyAction} from './property.action';
import {catchError, concatMap, mergeMap} from 'rxjs';
import {LoadAction} from '../../../../../core/components/utils/load/store';
import {PropertyInterface} from '../model/property.interface';
import {RESPONSE_SERVER_CONST} from '../../../../../shared/constant/response-server.constant';

@Injectable()
export class PropertyEffect {
  constructor(
    private _store: Store<PropertyState>,
    private _action$: Actions,
    private _propertyService: PropertyService
  ) {
  }

  list$ = createEffect(() => {
    return this._action$.pipe(
      ofType(PropertyAction.PropertyActionType.LIST_PROPERTY_INVOKE),
      mergeMap((data: { type: PropertyAction.PropertyActionType.LIST_PROPERTY_INVOKE }) => {
          this._store.dispatch(LoadAction.load());
          return this._propertyService.list()
            .pipe(
              concatMap((properties: PropertyInterface[]) => ([LoadAction.load(), PropertyAction.listPropertySuccess({properties})])),
              catchError(() => ([LoadAction.load(), PropertyAction.listPropertyError({error: RESPONSE_SERVER_CONST.error.list})]))
            )
        }
      )
    )
  }, {dispatch: true})

  add$ = createEffect(() => {
    return this._action$.pipe(
      ofType(PropertyAction.PropertyActionType.ADD_PROPERTY_INVOKE),
      mergeMap((data: { type: PropertyAction.PropertyActionType.ADD_PROPERTY_INVOKE, property: PropertyInterface }) => {
        this._store.dispatch(LoadAction.load());
        return this._propertyService.create(data.property)
          .pipe(
            concatMap((property: PropertyInterface) => ([LoadAction.load(), PropertyAction.addPropertySuccess({property})])),
            catchError(() => ([LoadAction.load(), PropertyAction.addPropertyError({error: RESPONSE_SERVER_CONST.error.add})]))
          )
      })
    )
  }, {dispatch: true})

  update$ = createEffect(() => {
    return this._action$.pipe(
      ofType(PropertyAction.PropertyActionType.UPDATE_PROPERTY_INVOKE),
      mergeMap((data: { type: string, property: PropertyInterface }) => {
        this._store.dispatch(LoadAction.load());
        return this._propertyService.update(data.property).pipe(
          concatMap((property: PropertyInterface) => ([LoadAction.load(), PropertyAction.updatePropertySuccess({property})])),
          catchError(() => ([
            LoadAction.load(), PropertyAction.updatePropertyError({error: RESPONSE_SERVER_CONST.error.update})]))
        )
      })
    )
  }, {dispatch: true});

  delete$ = createEffect(() => {
    return this._action$.pipe(
      ofType(PropertyAction.PropertyActionType.DELETE_PROPERTY_INVOKE),
      mergeMap((data: { type: PropertyAction.PropertyActionType.DELETE_PROPERTY_INVOKE, id: number }) => {
        this._store.dispatch(LoadAction.load());
        return this._propertyService.delete(data.id).pipe(
          concatMap(() => ([LoadAction.load(), PropertyAction.deletePropertySuccess({id: data.id})])),
          catchError(() => ([LoadAction.load(), PropertyAction.deletePropertyError({error: RESPONSE_SERVER_CONST.error.delete})]))
        )
      })
    )
  }, {dispatch: true});
}

import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {catchError, concatMap, mergeMap} from 'rxjs';
import {LoadAction} from '../../../../../core/components/utils/load/store';
import {ThematicService} from '../../../../destinations/shared/service/thematic.service';
import {ThematicInterface} from '../model/thematic.interface';
import {ThematicAction} from './thematic.action';
import {RESPONSE_SERVER_CONST} from '../../../../../shared/constant/response-server.constant';

@Injectable()
export class ThematicEffect {
  constructor(
    private _store: Store,
    private _action$: Actions,
    private _thematicService: ThematicService
  ) {
  }

  list$ = createEffect(() => {
    return this._action$.pipe(
      ofType(ThematicAction.ThematicTypeActions.LIST_THEMATIC_INVOKE),
      mergeMap((data: { type: ThematicAction.ThematicTypeActions.LIST_THEMATIC_INVOKE }) => {
          this._store.dispatch(LoadAction.load());
          return this._thematicService.list().pipe(
            concatMap((thematics: ThematicInterface[]) => ([LoadAction.load(), ThematicAction.listThematicSuccess({thematics})])),
            catchError(() => ([LoadAction.load(), ThematicAction.listThematicError({error: RESPONSE_SERVER_CONST.error.list})]))
          )
        }
      )
    )
  }, {dispatch: true});

  add$ = createEffect(() => {
    return this._action$.pipe(
      ofType(ThematicAction.addThematic),
      mergeMap((data: { type: ThematicAction.ThematicTypeActions.ADD_THEMATIC_INVOKE, thematic: ThematicInterface }) => {
        this._store.dispatch(LoadAction.load())
        return this._thematicService.create(data.thematic).pipe(
          concatMap((thematic: ThematicInterface) => ([
            LoadAction.load(), ThematicAction.addThematicSuccess({thematic})
          ])),
          catchError((err) => ([
              LoadAction.load(),
              ThematicAction.addThematicError({error: RESPONSE_SERVER_CONST.error.add})]
          ))
        )
      })
    )
  }, {dispatch: true})

  delete$ = createEffect(() => {
    return this._action$.pipe(
      ofType(ThematicAction.ThematicTypeActions.DELETE_THEMATIC_INVOKE),
      mergeMap((data: { type: ThematicAction.ThematicTypeActions.DELETE_THEMATIC_INVOKE, id: number }) => {
        this._store.dispatch(LoadAction.load());
        return this._thematicService.delete(data.id).pipe(
          concatMap(() => ([LoadAction.load(), ThematicAction.deleteThematicSuccess({id: data.id})])),
          catchError((error) => ([LoadAction.load(), ThematicAction.deleteThematicError({error: RESPONSE_SERVER_CONST.error.delete})]))
        )
      })
    )
  }, {dispatch: true})

  update$ = createEffect(() => {
    return this._action$.pipe(
      ofType(ThematicAction.updateThematic),
      mergeMap((data: { type: ThematicAction.ThematicTypeActions.UPDATE_THEMATIC_INVOKE, thematic: ThematicInterface }) => {
        this._store.dispatch(LoadAction.load());
        return this._thematicService.update(data.thematic).pipe(
          concatMap((thematic: ThematicInterface) => ([LoadAction.load(), ThematicAction.updateThematicSuccess({thematic})])),
          catchError(() => ([LoadAction.load(), ThematicAction.updateThematicError({error: RESPONSE_SERVER_CONST.error.update})]))
        )

      })
    )
  }, {dispatch: true})
}

import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {UserService} from '../service/user.service';
import {catchError, concatMap, mergeMap} from 'rxjs';
import {LoadAction} from '../../../../../core/components/utils/load/store';
import {RESPONSE_SERVER_CONST} from '../../../../../shared/constant/response-server.constant';
import {UserInterface} from '../model/user.interface';
import {UserState} from './users.state';
import {UsersAction} from './users.action';

@Injectable()
export class UsersEffect {
  constructor(
    private _store: Store<UserState>,
    private _action$: Actions,
    private _userService: UserService
  ) {
  }

  list$ = createEffect(() => {
    return this._action$.pipe(
      ofType(UsersAction.UsersActionTypes.LIST_USERS_INVOKE),
      mergeMap((data: { type: UsersAction.UsersActionTypes.LIST_USERS_INVOKE }) => {
        this._store.dispatch(LoadAction.load());
        return this._userService.list()
          .pipe(
            concatMap((users: UserInterface[]) => ([LoadAction.load(), UsersAction.listSuccess({users})])),
            catchError(() => ([LoadAction.load(), UsersAction.listError({error: RESPONSE_SERVER_CONST.error.list})]))
          )
      })
    )
  }, {dispatch: true})

  add$ = createEffect(() => {
    return this._action$.pipe(
      ofType(UsersAction.UsersActionTypes.ADD_USERS_INVOKE),
      mergeMap((data: { type: UsersAction.UsersActionTypes.ADD_USERS_INVOKE, user: UserInterface }) => {
          this._store.dispatch(LoadAction.load());
          return this._userService.create(data.user)
            .pipe(
              concatMap((user: UserInterface) => ([LoadAction.load(), UsersAction.addSuccess({user})])),
              catchError(() => ([LoadAction.load(), UsersAction.addError({error: RESPONSE_SERVER_CONST.error.add})]))
            )
        }
      )
    )
  }, {dispatch: true})

  update$ = createEffect(() => {
    return this._action$.pipe(
      ofType(UsersAction.UsersActionTypes.UPDATE_USERS_INVOKE),
      mergeMap((data: { type: string, user: UserInterface }) => {
        this._store.dispatch(LoadAction.load());
        return this._userService.update(data.user).pipe(
          concatMap((user: UserInterface) => ([LoadAction.load(), UsersAction.updateSuccess({user})])),
          catchError(() => ([
            LoadAction.load(), UsersAction.updateError({error: RESPONSE_SERVER_CONST.error.update})]))
        )
      })
    )
  }, {dispatch: true});

  delete$ = createEffect(() => {
    return this._action$.pipe(
      ofType(UsersAction.UsersActionTypes.DELETE_USERS_INVOKE),
      mergeMap((data: { type: UsersAction.UsersActionTypes.DELETE_USERS_INVOKE, id: number }) => {
        this._store.dispatch(LoadAction.load());
        return this._userService.delete(data.id).pipe(
          concatMap(() => ([LoadAction.load(), UsersAction.removeSuccess({id: data.id})])),
          catchError(() => ([LoadAction.load(), UsersAction.removeError({error: RESPONSE_SERVER_CONST.error.delete})]))
        )
      })
    )
  }, {dispatch: true});
}

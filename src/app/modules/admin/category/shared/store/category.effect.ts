import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {CategoryService} from '../service/category.service';
import {CategoryActions} from './category.action';
import {catchError, concatMap, mergeMap} from 'rxjs';
import {DataCategoryConstant} from '../constant/data.constant';
import {CategoryInterface} from '../models/category.interface';
import {LoadAction} from '../../../../../core/components/utils/load/store';
import {RESPONSE_SERVER_CONST} from '../../../../../shared/constant/response-server.constant';

@Injectable()
export class CategoryEffect {

  constructor(
    private _store: Store,
    private _action$: Actions,
    private _categoryService: CategoryService
  ) {
  }

  listCategories$ = createEffect(() => {
    return this._action$.pipe(
      ofType(CategoryActions.CategoryTypeAction.LIST_CATEGORY_INVOKE),
      concatMap((data: { type: CategoryActions.CategoryTypeAction.LIST_CATEGORY_INVOKE }) => {
        // load action
        this._store.dispatch(LoadAction.load());
        return this._categoryService.list()
          .pipe(
            concatMap((categories: CategoryInterface[]) => [LoadAction.load(), CategoryActions.listCategorySuccess({categories})]),
            catchError(() => [
                LoadAction.load(),
                CategoryActions.listCategoryError({error: DataCategoryConstant.error.list})
              ]
            )
          )
      })
    )
  }, {dispatch: true});

  addCategory$ = createEffect(() => {
    return this._action$.pipe(
      ofType(CategoryActions.CategoryTypeAction.ADD_CATEGORY_INVOKE),
      mergeMap((data: { type: string, payload: CategoryInterface }) => {
          this._store.dispatch(LoadAction.load());
          return this._categoryService.create(data.payload).pipe(
            concatMap((result: CategoryInterface) => {
              return ([
                LoadAction.load(), // Set loading false
                CategoryActions.addCategorySuccess({payload: result})
              ]);
            }),
            catchError(() => ([
                LoadAction.load(),
                CategoryActions.addCategoryError({error: DataCategoryConstant.error.add})
              ])
            ) // Set loading false

          )

        }
      )
    )
  }, {dispatch: true})

  updateCategory$ = createEffect(() => {
    return this._action$.pipe(
      ofType(CategoryActions.CategoryTypeAction.UPDATE_CATEGORY_INVOKE),
      mergeMap((data: { type: string, payload: CategoryInterface }) => {
          this._store.dispatch(LoadAction.load());
          return this._categoryService.update(data.payload).pipe(
            concatMap((response: CategoryInterface) => ([LoadAction.load(),
              CategoryActions.updateCategorySuccess({payload: response})
            ])),
            catchError(() => ([
              LoadAction.load(),
              CategoryActions.updateCategoryError({error: DataCategoryConstant.error.update})
            ]))
          )
        }
      )
    )
  }, {dispatch: true});

  // Remove categories in the database
  deleteCategory$ = createEffect(() => {
    return this._action$.pipe(
      ofType(CategoryActions.CategoryTypeAction.DELETE_CATEGORY_INVOKE),
      mergeMap((data: { type: CategoryActions.CategoryTypeAction.DELETE_CATEGORY_INVOKE, id: number }) => {
        this._store.dispatch(LoadAction.load());

        return this._categoryService.delete(data.id).pipe(
          concatMap(() => ([LoadAction.load(), CategoryActions.deleteCategorySuccess({id: data.id})])),
          catchError(() => ([LoadAction.load(),
            CategoryActions.deleteCategoryError({error: RESPONSE_SERVER_CONST.error.delete})
          ]))
        )
      })
    )
  }, {dispatch: true});
}

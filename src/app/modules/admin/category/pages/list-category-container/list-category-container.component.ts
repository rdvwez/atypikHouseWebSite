import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {combineLatestWith, map, Observable} from 'rxjs';
import {selectCategories, selectErrorCategory, selectFilterCategory} from '../../shared/store';
import {Router} from '@angular/router';
import {CategoryActions} from '../../shared/store/category.action';
import {ActionTableEnum} from '../../../../../core/components/data-table/action-table.enum';
import {ColumnTableInterface} from '../../../../../core/components/data-table/column-table.interface';
import {CategoryInterface} from '../../shared/models/category.interface';
import {TypeAlert} from '../../../../../core/components/alert/alert.component';
import {DataCategoryConstant} from '../../shared/constant/data.constant';
import {DataActionEmitInterface} from '../../../../../core/components/data-table/data-action-emit.interface';
import {selectLoading} from '../../../../../core/components/utils/load/store';

@Component({
  selector: 'app-list-category-container',
  templateUrl: './list-category-container.component.html',
  styleUrls: ['./list-category-container.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListCategoryContainerComponent implements OnInit {
  // Constant
  dataConst = DataCategoryConstant;
  // streams
  categories$: Observable<ReadonlyArray<CategoryInterface>> = this._store.pipe(select(selectCategories));
  filter$: Observable<CategoryInterface | undefined> = this._store.pipe(select(selectFilterCategory));
  errorMessage$: Observable<string> = this._store.pipe(select(selectErrorCategory));
  loading$: Observable<boolean> = this._store.pipe(select(selectLoading));

  // Headers data table
  headers: ColumnTableInterface<CategoryInterface>[] = [
    {headerName: 'Category', fieldName: 'libelle', isModelProperty: true},
    {headerName: 'Visible', fieldName: 'show', isModelProperty: true}
  ];

  // Alert response server message
  alert: TypeAlert;

  constructor(
    private _store: Store,
    private _router: Router) {
  }

  ngOnInit(): void {
    this.getListCategories();
  }

  getListCategories() {
    this._store.dispatch(CategoryActions.listCategory());
  }

  /**
   * Select item category && make action DELETE && UPDATE
   * @param event
   */
  selectCategory(event: DataActionEmitInterface<CategoryInterface>): void {
    switch (event.action) {
      case ActionTableEnum.DELETE:
        if (event.data.id) {
          this._store.dispatch(CategoryActions.deleteCategory({id: event.data.id}))
        }
        return;
      case ActionTableEnum.EDIT:
        this._router.navigate([`/admin/category/form/${event.data.id}`,]);
        return;

      case ActionTableEnum.SEARCH:
        // Search element
        this._store.dispatch(CategoryActions.setFilter({category: event.data}));
        // combine with filters
        this.categories$ = this.categories$.pipe(
          combineLatestWith(this.filter$),
          map(([categories, category]: [ReadonlyArray<CategoryInterface>, CategoryInterface | undefined]) => {
            return categories.filter((elt: CategoryInterface) => {
              if (category?.libelle) {
                return elt.libelle.toLocaleLowerCase().indexOf(category?.libelle) !== -1
              }
              return elt;
            })
          })
        )
    }
  }
}


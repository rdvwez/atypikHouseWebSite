import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {DataCategoryConstant} from '../../shared/constant/data.constant';
import {Observable, Subject, takeUntil} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {ActivatedRoute, Router} from '@angular/router';
import {selectCategory, selectErrorCategory} from '../../shared/store';
import {CategoryInterface} from '../../shared/models/category.interface';
import {TypeAlert} from '../../../../../core/components/alert/alert.component';
import {FormActionsEnum} from '../../../../../shared/enums/form-actions.enum';
import {CategoryActions} from '../../shared/store/category.action';

@Component({
  selector: 'app-form-category-container',
  templateUrl: './form-category-container.component.html',
  styleUrls: ['./form-category-container.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormCategoryContainerComponent implements OnInit, OnDestroy {
  dataConst = DataCategoryConstant;
  category$: Observable<CategoryInterface | undefined>;
  // error handling
  alert: TypeAlert;
  destroyed$: Subject<void> = new Subject<any>();
  messageResponse: string = '';
  errorMessage$: Observable<string> = this._store.pipe(select(selectErrorCategory));

  constructor(
    private _store: Store,
    private router: ActivatedRoute,
    private routes: Router
  ) {
    const id = this.router.snapshot.params['id'];
    // Select category by Id
    this.category$ = this._store.pipe(select(selectCategory(parseInt(id))));
  }

  ngOnInit(): void {
  }

  formAction(data: { value: any, action: FormActionsEnum }): void {
    switch (data.action) {
      case  FormActionsEnum.CREATE: // Add category
        // Add category
        this._store.dispatch(CategoryActions.addCategory({payload: data.value}));
        this.onErrorMessage(data.action);
        return;
      case FormActionsEnum.UPDATE:
        this._store.dispatch(CategoryActions.updateCategory({payload: data.value}));
        this.onErrorMessage(data.action);
        return;
    }
  }

  onErrorMessage(action: FormActionsEnum) {
    // update category
    this.errorMessage$.pipe(
      takeUntil(this.destroyed$)
    ).subscribe({
      next: (err: string) => {
        if (err) {
          // error operations
          this.alert = TypeAlert.ERROR;
          this.messageResponse = err;
        } else {
          this.alert = TypeAlert.SUCCESS;
          this.messageResponse = action === FormActionsEnum.UPDATE ? this.dataConst.success.update : this.dataConst.success.add
        }
      }
    })
  }

  onClickList() {
    this.routes.navigate(['/admin/category']);
  }

  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}

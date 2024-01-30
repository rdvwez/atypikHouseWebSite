import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {PropertyAction} from '../../shared/store';
import {RESPONSE_SERVER_CONST} from '../../../../../shared/constant/response-server.constant';
import {Observable, Subject, takeUntil} from 'rxjs';
import {PropertyInterface} from '../../shared/model/property.interface';
import {selectErrorProperty, selectProperty} from '../../shared/store/property.selector';
import {TypeAlert} from '../../../../../core/components/alert/alert.component';
import {ActivatedRoute, Router} from '@angular/router';
import {FormActionsEnum} from '../../../../../shared/enums/form-actions.enum';
import {PROPERTY_CONST} from '../../shared/constant/property.constant';
import {GENERAL_DATA_TEXT_CONST} from '../../../../../shared/constant/data-text.constant';
import {CategoryActions} from '../../../category/shared/store/category.action';
import {DataSelectInterface} from '../../../../../core/components/data-select/data-select.interface';
import {selectCategories} from '../../../category/shared/store';
import {DataSelectService} from '../../../../../shared/service/data-select.service';

@Component({
  selector: 'app-form-property-container',
  templateUrl: './form-property-container.component.html',
  styleUrls: ['./form-property-container.component.css']
})
export class FormPropertyContainerComponent implements OnInit, OnDestroy {

  // Constant
  dataConst = PROPERTY_CONST;
  generalConst = GENERAL_DATA_TEXT_CONST;
  responseServerConst = RESPONSE_SERVER_CONST;
  // streams
  property$: Observable<PropertyInterface | undefined>;
  destroyed$: Subject<void> = new Subject<any>();
  categories$: Observable<DataSelectInterface[]>;
  dataSelectCategories$: Observable<DataSelectInterface>;

  //error message handling
  errorMessage$: Observable<string> = this._store.pipe(select(selectErrorProperty));
  alert: TypeAlert;
  messageResponse: string = '';

  constructor(
    private _store: Store,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    const id = this.activatedRoute.snapshot.params['id'];
    this.property$ = this._store.pipe(select(selectProperty(parseInt(id))));

    // property
    const dataService = inject(DataSelectService);
    this._store.dispatch(CategoryActions.listCategory());
    this.categories$ = dataService.format(this._store.pipe(select(selectCategories)), 'libelle');
  }

  ngOnInit(): void {
  }

  formAction(data: { value: any, action: FormActionsEnum }): void {
    switch (data.action) {
      case  FormActionsEnum.CREATE: // Add category
        // Add category
        this._store.dispatch(PropertyAction.addProperty({property: data.value}));
        this.onErrorMessage(data.action);
        return;
      case FormActionsEnum.UPDATE:
        this._store.dispatch(PropertyAction.updateProperty({property: data.value}));
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
          this.messageResponse = action === FormActionsEnum.UPDATE ? this.responseServerConst.success.update : this.responseServerConst.success.add
        }
      }
    })
  }

  onClickList() {
    this.router.navigate(['/admin/property']);
  }

  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}

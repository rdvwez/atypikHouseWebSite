import {ChangeDetectionStrategy, Component, inject, OnDestroy} from '@angular/core';
import {PropertyAction, selectErrorProperty, selectProperties} from '../../../property/shared/store';
import {select, Store} from '@ngrx/store';
import {Observable, Subject, takeUntil} from 'rxjs';
import {selectLoading} from '../../../../../core/components/utils/load/store';
import {DataSelectInterface} from '../../../../../core/components/data-select/data-select.interface';
import {DataSelectService} from '../../../../../shared/service/data-select.service';
import {FormActionsEnum} from '../../../../../shared/enums/form-actions.enum';
import {ActivatedRoute, Router} from '@angular/router';
import {GENERAL_DATA_TEXT_CONST} from '../../../../../shared/constant/data-text.constant';
import {RESPONSE_SERVER_CONST} from '../../../../../shared/constant/response-server.constant';
import {VALUE_CONST} from '../../shared/constant/data.constant';
import {TypeAlert} from '../../../../../core/components/alert/alert.component';
import {ValueInterface} from '../../shared/model/value.interface';
import {selectValue} from '../../shared/store/value.selector';
import {ValueAction, ValueState} from '../../shared/store';

@Component({
  selector: 'app-form-value-container',
  templateUrl: './form-value-container.component.html',
  styleUrls: ['./form-value-container.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormValueContainerComponent implements OnDestroy {
  // constant
  dataConst = VALUE_CONST;
  generalConst = GENERAL_DATA_TEXT_CONST;
  responseServerConst = RESPONSE_SERVER_CONST;
  alert: TypeAlert;

  // streams
  properties$: Observable<DataSelectInterface[]>
  loading$: Observable<boolean> = this._store.pipe(select(selectLoading));
  destroyed$: Subject<void> = new Subject<any>();
  properties: DataSelectInterface[];
  value$: Observable<ValueInterface | undefined>;

  errorMessage$: Observable<string> = this._store.pipe(select(selectErrorProperty));
  messageResponse: string = '';

  constructor(
    private _store: Store<ValueState>,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {
    const id = this.activatedRoute.snapshot.params['id'];
    this.value$ = this._store.pipe(select(selectValue(parseInt(id))));
    // get proper
    const dataService = inject(DataSelectService);
    this._store.dispatch(PropertyAction.listProperty());
    this.properties$ = dataService.format(this._store.pipe(select(selectProperties)), 'libelle');
  }

  formAction(data: { value: any, action: FormActionsEnum }): void {
    switch (data.action) {
      case FormActionsEnum.CREATE:
        // Create action
        this._store.dispatch(ValueAction.addValue({
          value: data.value
        }))
        this.onErrorMessage(data.action);
        return;
      case FormActionsEnum.UPDATE:
        // update
        this._store.dispatch(ValueAction.updateValue({
          value: data.value
        }))
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
    this.router.navigate(['/admin/value']);
  }

  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}

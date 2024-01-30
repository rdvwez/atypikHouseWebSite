import {ChangeDetectionStrategy, Component, inject, OnInit} from '@angular/core';
import {VALUE_CONST} from '../../../../admin/value/shared/constant/data.constant';
import {GENERAL_DATA_TEXT_CONST} from '../../../../../shared/constant/data-text.constant';
import {RESPONSE_SERVER_CONST} from '../../../../../shared/constant/response-server.constant';
import {TypeAlert} from '../../../../../core/components/alert/alert.component';
import {Observable, Subject, takeUntil} from 'rxjs';
import {DataSelectInterface} from '../../../../../core/components/data-select/data-select.interface';
import {select, Store} from '@ngrx/store';
import {selectLoading} from '../../../../../core/components/utils/load/store';
import {ValueInterface} from '../../../../admin/value/shared/model/value.interface';
import {PropertyAction, selectErrorProperty, selectProperties} from '../../../../admin/property/shared/store';
import {ValueAction, ValueState} from '../../../../admin/value/shared/store';
import {ActivatedRoute, Router} from '@angular/router';
import {selectValue} from '../../../../admin/value/shared/store/value.selector';
import {DataSelectService} from '../../../../../shared/service/data-select.service';
import {FormActionsEnum} from '../../../../../shared/enums/form-actions.enum';

@Component({
  selector: 'app-owner-form-value',
  templateUrl: './owner-form-value.component.html',
  styleUrls: ['./owner-form-value.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OwnerFormValueComponent implements OnInit {

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

  ngOnInit(): void {
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

  onErrorMessage(action: FormActionsEnum): void {
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
    this.router.navigate(['/owner/value']);
  }
}

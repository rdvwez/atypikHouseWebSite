import {ChangeDetectionStrategy, Component, inject, OnDestroy, OnInit} from '@angular/core';
import {HOUSE_CONST} from '../../../../admin/house/shared/constant/data.constant';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable, Subject, takeUntil} from 'rxjs';
import {HouseInterface} from '../../../../admin/house/shared/model/house.interface';
import {HouseAction, HouseState, selectErrorHouse, selectHouseById} from '../../../../admin/house/shared/store';
import {select, Store} from '@ngrx/store';
import {selectLoading} from '../../../../../core/components/utils/load/store';
import {FormActionsEnum} from '../../../../../shared/enums/form-actions.enum';
import {TypeAlert} from '../../../../../core/components/alert/alert.component';
import {RESPONSE_SERVER_CONST} from '../../../../../shared/constant/response-server.constant';
import {DataSelectService} from '../../../../../shared/service/data-select.service';
import {ThematicAction} from '../../../../admin/thematic/shared/store/thematic.action';
import {DataSelectInterface} from '../../../../../core/components/data-select/data-select.interface';
import {selectThematics} from '../../../../admin/thematic/shared/store';
import {CategoryActions} from '../../../../admin/category/shared/store/category.action';
import {selectCategories} from '../../../../admin/category/shared/store';

@Component({
  selector: 'app-form-house-container',
  templateUrl: './form-house-container.component.html',
  styleUrls: ['./form-house-container.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormHouseContainerComponent implements OnInit, OnDestroy {
  dataConst = HOUSE_CONST;
  // streams
  house$: Observable<HouseInterface | undefined>;
  loading$: Observable<boolean> = this._store.pipe(select(selectLoading));
  destroyed$: Subject<void> = new Subject<any>();
  errorMessage$: Observable<string> = this._store.pipe(select(selectErrorHouse));
  messageResponse: string = '';
  thematics$: Observable<DataSelectInterface[]>;
  categories$: Observable<DataSelectInterface[]>;

  responseServerConst = RESPONSE_SERVER_CONST;
  alert: TypeAlert;

  constructor(
    private _store: Store<HouseState>,
    private _router: Router,
    private activatedRoute: ActivatedRoute,
  ) {
    const id = this.activatedRoute.snapshot.params['id'];
    this.house$ = this._store.pipe(select(selectHouseById(parseInt(id))));
    // Streams thematics
    const dataService = inject(DataSelectService);
    this._store.dispatch(ThematicAction.listThematic());
    this.thematics$ = dataService.format(this._store.pipe(select(selectThematics)), 'libelle');

    // Streams properties
    this._store.dispatch(CategoryActions.listCategory());
    this.categories$ = dataService.format(this._store.pipe(select(selectCategories)), 'libelle');
  }

  ngOnInit(): void {
  }

  gotTo() {
    this._router.navigate(['owner/house']);
  }

  formAction(data: { value: any, action: FormActionsEnum }): void {
    switch (data.action) {
      case FormActionsEnum.CREATE:
        // Create action
        this._store.dispatch(HouseAction.addHouse({
          house: data.value
        }))
        this.onErrorMessage(data.action);
        return;
      case FormActionsEnum.UPDATE:
        // update
        this._store.dispatch(HouseAction.updateHouse({
          house: data.value
        }))
        this.onErrorMessage(data.action);
        return;
    }
  }

  onErrorMessage(action: FormActionsEnum) {
    // Update category
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

  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}

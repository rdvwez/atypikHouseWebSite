import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {ActivatedRoute} from '@angular/router';
import {ReservationInterface} from '../../../owner/reservation/shared/model/reservation.interface';
import {FormActionsEnum} from '../../../../shared/enums/form-actions.enum';
import {ReservationSerializer} from '../../../owner/reservation/shared/serializer/reservation.serializer';
import {Observable, Subject, takeUntil} from 'rxjs';
import {HouseInterface} from '../../../admin/house/shared/model/house.interface';
import {HouseAction, selectSelectedHouse} from '../../../admin/house/shared/store';
import {ReservationService} from '../../../owner/reservation/shared/service/reservation.service';
import {AlertComponent, TypeAlert} from '../../../../core/components/alert/alert.component';
import {RESERVATION_CONSTANT} from '../../../owner/reservation/shared/constant/reservation.constant';
import {CommonModule} from '@angular/common';
import {
  FormReservationComponent
} from '../../../owner/reservation/components/form-reservation/form-reservation.component';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    FormReservationComponent,
    AlertComponent
  ]
})
export class ReservationComponent implements OnInit, OnDestroy {
  @Input() selectedHouseId: number | undefined;

  house$: Observable<HouseInterface | undefined | null> = this._store.pipe(select(selectSelectedHouse));
  house: HouseInterface;
  destroyed$: Subject<void> = new Subject();
  amount: number

  messageResponse: string = '';
  alert: TypeAlert;

  constructor(
    private _store: Store,
    private router: ActivatedRoute,
    private service: ReservationService
  ) {
    // Get house

  }

  ngOnInit(): void {
    if (this.selectedHouseId) {
      this._store.dispatch(HouseAction.getHouse({id: this.selectedHouseId}));
      this.getHouse();
    }
  }

  onFormAction(event: { value: ReservationInterface | any, action: FormActionsEnum }): void {
    switch (event.action) {
      case FormActionsEnum.CREATE:
        let payload = ReservationSerializer.formatForm(event.value);
        // Add reservation
        this.service.create(payload)
          .pipe(
            takeUntil(this.destroyed$)
          )
          .subscribe({
            next: () => {
              this.alert = TypeAlert.SUCCESS;
              this.messageResponse = RESERVATION_CONSTANT.serverAnswer.saveReservation;
            },
            error: (err: any) => {
              this.alert = TypeAlert.ERROR;
              this.messageResponse = err.message
            }
          })
        break;
    }
  }

  getHouse(): void {
    this.house$.pipe(
      takeUntil(this.destroyed$)
    ).subscribe({
      next: (result: HouseInterface | undefined | null) => {
        if (result) {
          this.selectedHouseId = result.id;
          this.amount = result.price
        }
      }
    })
  }

  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete()
  }
}

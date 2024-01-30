import {ChangeDetectionStrategy, Component, inject, OnInit} from '@angular/core';
import {RESERVATION_CONSTANT} from '../../shared/constant/reservation.constant';
import {Observable} from 'rxjs';
import {ReservationInterface} from '../../shared/model/reservation.interface';
import {ColumnTableInterface} from '../../../../../core/components/data-table/column-table.interface';
import {ReservationService} from '../../shared/service/reservation.service';
import {ReservationActionEnum} from '../../shared/reservation-action.enum';

@Component({
  selector: 'app-list-owner-reservation',
  templateUrl: './list-owner-reservation.component.html',
  styleUrls: ['./list-owner-reservation.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListOwnerReservationComponent implements OnInit {

  dataConst = RESERVATION_CONSTANT;
  reservations$: Observable<ReservationInterface[]>;

  headers: ColumnTableInterface<ReservationInterface>[] = [
    {headerName: 'Reference', fieldName: 'id', isModelProperty: true},
    {headerName: 'Date début', fieldName: 'status', isModelProperty: false},
    {headerName: 'Status', fieldName: 'id', isModelProperty: true},
    {headerName: 'Date Fin', fieldName: 'id', isModelProperty: true},
  ];

  constructor(private _service: ReservationService) {
    this.reservations$ = inject(ReservationService).list();
  }

  ngOnInit(): void {
  }

  onAction(event: { action: ReservationActionEnum, data: ReservationInterface }) {
    switch (event.action) {
      case ReservationActionEnum.DELETE:
        // delete reservation
        if (event.data.id) {
          this._service.delete(event.data.id);
        }
        break;
      case ReservationActionEnum.SHOW:
        // details reservation
        if (event.data.id) {
          // navigate routes
          //this.router.navigate([`/owner/reservations/${event.data.id}`]);
        }
        break;
    }
  }
}

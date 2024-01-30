import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ColumnTableInterface} from '../../../../../core/components/data-table/column-table.interface';
import {ReservationInterface} from '../../../../owner/reservation/shared/model/reservation.interface';
import {ReservationService} from '../../../../owner/reservation/shared/service/reservation.service';
import {RESERVATION_CONSTANT} from '../../../../owner/reservation/shared/constant/reservation.constant';
import {Observable} from 'rxjs';
import {ReservationActionEnum} from '../../../../owner/reservation/shared/reservation-action.enum';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-client-reservation',
  templateUrl: './list-client-reservation.component.html',
  styleUrls: ['./list-client-reservation.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListClientReservationComponent implements OnInit {

  dataConst = RESERVATION_CONSTANT;
  reservations$: Observable<ReservationInterface[]>;

  headers: ColumnTableInterface<ReservationInterface>[] = [
    {headerName: 'Reference', fieldName: 'id', isModelProperty: true},
    {headerName: 'Date début', fieldName: 'status', isModelProperty: false},
    {headerName: 'Status', fieldName: 'id', isModelProperty: true},
    {headerName: 'Date Fin', fieldName: 'id', isModelProperty: true},
  ];

  constructor(private _service: ReservationService, private router: Router) {
  }

  ngOnInit(): void {
    this.reservations$ = this._service.list();
  }

  onAction(event: { action: ReservationActionEnum, data: ReservationInterface }) {
    switch (event.action) {
      case ReservationActionEnum.DELETE:
        // delete reservation
        if (event.data.id) {
          this._service.delete(event.data.id);
        }
        break;
    }
  }

}

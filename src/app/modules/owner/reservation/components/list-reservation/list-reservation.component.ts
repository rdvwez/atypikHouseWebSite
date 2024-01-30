import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ReservationInterface, StatusReservationEnum} from '../../shared/model/reservation.interface';
import {CommonModule} from '@angular/common';
import {NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';
import {ReservationActionEnum} from '../../shared/reservation-action.enum';

@Component({
  selector: 'app-list-reservation',
  standalone: true,
  imports: [CommonModule, NgbDropdownModule],
  templateUrl: './list-reservation.component.html',
  styleUrls: ['./list-reservation.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListReservationComponent implements OnInit {

  @Input() reservations: ReservationInterface[] | null;
  @Input() loading: boolean | null;
  @Output() listReservationAction = new EventEmitter<{ action: ReservationActionEnum, data: ReservationInterface }>();

  reservationEnum = ReservationActionEnum;

  constructor() {
  }

  ngOnInit(): void {
  }

  getClassStatusReservation(status: StatusReservationEnum) {
    switch (status) {
      case StatusReservationEnum.PENDING:
        return 'bg-soft-warning text-warning';
      case StatusReservationEnum.COMPLETED:
        return 'bg-soft-success text-success';
      case StatusReservationEnum.FAILED:
        return 'bg-soft-danger text-danger';
      default:
        return '';
        break;
    }
  }

  /**
   *
   * @param actionEnum
   * @param reservation
   */
  onActionClick(actionEnum: ReservationActionEnum, reservation: ReservationInterface) {
    this.listReservationAction.emit({action: actionEnum, data: reservation});
  }
}

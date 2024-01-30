import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {NgIf} from '@angular/common';
import {ReservationService} from '../../shared/service/reservation.service';
import {ActivatedRoute} from '@angular/router';
import {Subject, takeUntil} from 'rxjs';
import {ReservationInterface} from '../../shared/model/reservation.interface';
import {environment} from '../../../../../../environments/environment';

@Component({
  selector: 'app-detail-reservation',
  standalone: true,
  imports: [NgIf],
  templateUrl: './detail-reservation.component.html',
  styleUrls: ['./detail-reservation.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailReservationComponent implements OnInit {

  destroyed$: Subject<void> = new Subject<void>();
  reservation: ReservationInterface;
  environment = environment

  constructor(private _service: ReservationService,
              private _activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    const {id} = this._activatedRoute.snapshot.params;
    this._service.read(id)
      .pipe(
        takeUntil(this.destroyed$)
      )
      .subscribe((result: ReservationInterface) => {
        this.reservation = result;
      })
  }

  getUrlHouseImage(reservation: ReservationInterface): string {
    if (typeof reservation.house == "object"
    ) {
      return environment.hostImage + reservation.house.images[0].path;
    }
    return ''
  }

}

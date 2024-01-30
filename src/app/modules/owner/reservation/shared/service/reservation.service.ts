import {Injectable} from '@angular/core';
import {AbstractCrudService} from '../../../../../shared/service/crud.service';
import {ReservationInterface} from '../model/reservation.interface';
import {HttpClient} from '@angular/common/http';
import {ReservationSerializer} from '../serializer/reservation.serializer';

@Injectable({
  providedIn: 'root'
})
export class ReservationService extends AbstractCrudService<ReservationInterface> {

  constructor(
    private _http: HttpClient,
    private rSerializer: ReservationSerializer
  ) {
    super(
      _http,
      rSerializer
    )
    this.endpoint = 'reservation';
  }
}

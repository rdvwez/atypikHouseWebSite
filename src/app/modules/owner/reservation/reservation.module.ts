import {NgModule} from '@angular/core';
import {ReservationRoutingModule} from './reservation-routing.module';
import {ListOwnerReservationComponent} from './pages/list-owner-reservation/list-owner-reservation.component';
import {ListReservationComponent} from './components/list-reservation/list-reservation.component';
import {StandardUserLayoutComponent} from '../../../layout/layouts/standard-user-layout/standard-user-layout.component';
import {SharedModule} from '../../../shared/shared.module';

@NgModule({
  imports: [
    StandardUserLayoutComponent,
    ReservationRoutingModule,
    ListReservationComponent,
    SharedModule
  ],
  declarations: [
    ListOwnerReservationComponent
  ]
})

export class ReservationModule {

}

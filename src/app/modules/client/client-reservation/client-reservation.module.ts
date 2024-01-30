import {NgModule} from '@angular/core';
import {ListClientReservationComponent} from './pages/list-client-reservation/list-client-reservation.component';
import {StandardUserLayoutComponent} from '../../../layout/layouts/standard-user-layout/standard-user-layout.component';
import {SharedModule} from '../../../shared/shared.module';
import {ClientReservationRoutingModule} from './client-reservation-routing.module';
import {ListReservationComponent} from '../../owner/reservation/components/list-reservation/list-reservation.component';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    StandardUserLayoutComponent,
    ClientReservationRoutingModule,
    ListReservationComponent,
    SharedModule,
    RouterModule
  ],
  declarations: [
    ListClientReservationComponent
  ]
})

export class ClientReservationModule {

}

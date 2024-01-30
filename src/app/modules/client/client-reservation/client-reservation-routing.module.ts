import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListClientReservationComponent} from './pages/list-client-reservation/list-client-reservation.component';

export const CLIENT_RESERVATION_ROUTES: Routes = [
  {path: '', component: ListClientReservationComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(CLIENT_RESERVATION_ROUTES)]
})

export class ClientReservationRoutingModule {

}

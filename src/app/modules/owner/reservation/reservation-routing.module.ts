import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListOwnerReservationComponent} from './pages/list-owner-reservation/list-owner-reservation.component';
import {DetailReservationComponent} from './pages/detail-reservation/detail-reservation.component';

const RESERVATION_ROUTES: Routes = [
  {path: '', component: ListOwnerReservationComponent},
  {path: ':id', component: DetailReservationComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(RESERVATION_ROUTES)
  ],
  exports: [RouterModule]
})

export class ReservationRoutingModule {

}

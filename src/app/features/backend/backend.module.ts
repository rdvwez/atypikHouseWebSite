import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservationComponent } from './account/reservation/reservation.component';
import { AccountNavbarComponent } from './account/account-navbar/account-navbar.component';
import { AccountComponent } from './account/account.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BACKEND_ROUTES } from './backend.routes';



@NgModule({
  declarations: [
    AccountComponent,
    AccountNavbarComponent,
    ReservationComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(BACKEND_ROUTES)
  ]
})
export class BackendModule { }

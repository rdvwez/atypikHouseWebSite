import {NgModule} from '@angular/core';
import {SharedModule} from '../../../shared/shared.module';
import {RouterModule} from '@angular/router';
import {DashboardComponent} from './dashboard.component';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {AdminLayoutModule} from '../../../layout/layouts/admin-layout/admin-layout.module';

@NgModule({
  imports: [
    SharedModule,
    RouterModule,
    DashboardRoutingModule,
    AdminLayoutModule
  ],
  declarations: [
    DashboardComponent
  ]
})

export class DashboardModule {

}

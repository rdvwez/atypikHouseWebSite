import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard.component';

const DASHBOARD_ROUTES: Routes = [
  {path: '', component: DashboardComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(DASHBOARD_ROUTES)]
})

export class DashboardRoutingModule {

}

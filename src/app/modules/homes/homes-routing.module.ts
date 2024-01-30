import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HOMES_ROUTES} from './homes-routes.constant';

@NgModule({
  imports: [ RouterModule.forChild(HOMES_ROUTES)],
  exports: [ RouterModule ]
})

export class HomesRoutingModule {

}

import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {USERS_ROUTES} from './user-routes.const';

@NgModule({
  imports: [RouterModule.forChild(USERS_ROUTES)],
  exports: [RouterModule]
})

export class UsersRoutingModule {

}

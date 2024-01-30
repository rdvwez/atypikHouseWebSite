import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AUTH_ROUTES_CONST} from './auth-routes.constant';

@NgModule({
  imports: [RouterModule.forChild(AUTH_ROUTES_CONST)],
  exports: [RouterModule]
})

export class AuthRoutingModule {

}

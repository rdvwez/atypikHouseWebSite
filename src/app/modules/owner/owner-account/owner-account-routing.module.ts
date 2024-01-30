import {NgModule} from '@angular/core';
import {OwnerAccountComponent} from './owner-account.component';
import {RouterModule, Routes} from '@angular/router';

const OWNER_ACCOUNT_ROUTES: Routes = [
  {path: '', component: OwnerAccountComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(OWNER_ACCOUNT_ROUTES)]
})

export class OwnerAccountRoutingModule {

}

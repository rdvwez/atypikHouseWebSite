import {NgModule} from '@angular/core';
import {OwnerAccountRoutingModule} from './owner-account-routing.module';
import {OwnerAccountComponent} from './owner-account.component';
import {StandardUserLayoutComponent} from '../../../layout/layouts/standard-user-layout/standard-user-layout.component';

@NgModule({
  imports: [
    OwnerAccountRoutingModule,
    // custom component
    StandardUserLayoutComponent,
  ],
  declarations: [
    OwnerAccountComponent
  ]
})

export class OwnerAccountModule {

}

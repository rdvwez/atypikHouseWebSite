import {NgModule} from '@angular/core';
import {ValuesRoutingModule} from './values-routing.module';
import {ValueSharedModule} from '../../value-shared/value-shared.module';
import {CardContentOwnerComponent} from '../../../layout/layouts/card-content-owner/card-content-owner.component';
import {OwnerValuesComponent} from './pages/owner-values/owner-values.component';
import {CommonModule} from '@angular/common';
import {OwnerFormValueComponent} from './pages/owner-form-value/owner-form-value.component';

@NgModule({
  imports: [
    ValuesRoutingModule,
    CommonModule,
    // Custom component module
    ValueSharedModule,
    CardContentOwnerComponent,
  ],
  declarations: [
    OwnerValuesComponent,
    OwnerFormValueComponent
  ]
})

export class ValuesModule {

}

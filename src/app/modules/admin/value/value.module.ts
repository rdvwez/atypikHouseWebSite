import {NgModule} from '@angular/core';
import {SharedModule} from '../../../shared/shared.module';
import {ValueRoutingModule} from './value-routing.module';
import {AdminLayoutModule} from '../../../layout/layouts/admin-layout/admin-layout.module';
import {ValueSharedModule} from '../../value-shared/value-shared.module';
import {ListValueContainerComponent} from './pages/list-value-container/list-value-container.component';
import {FormValueContainerComponent} from './pages/form-value-container/form-value-container.component';

@NgModule({
  imports: [
    // Core
    SharedModule,
    //custom
    ValueRoutingModule,
    // layout
    AdminLayoutModule,
    ValueSharedModule
  ],
  declarations: [
    ListValueContainerComponent,
    FormValueContainerComponent
  ]
})
export class ValueModule {

}

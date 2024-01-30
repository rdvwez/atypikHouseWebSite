import {NgModule} from '@angular/core';
import {AdminLayoutModule} from '../../../layout/layouts/admin-layout/admin-layout.module';
import {ListPropertyContainerComponent} from './pages/list-property-container/list-property-container.component';
import {PropertyRoutingModule} from './property-routing.module';
import {EffectsModule} from '@ngrx/effects';
import {PropertyEffect} from './shared/store/property.effect';
import {StoreModule} from '@ngrx/store';
import {PROPERTY_STATE_NAME} from './shared/store/property.selector';
import {PropertyReducer} from './shared/store';
import {PropertyListComponent} from './components/property-list/property-list.component';
import {DataTableComponent} from '../../../core/components/data-table/data-table.component';
import {SharedModule} from '../../../shared/shared.module';
import {PropertyFormComponent} from './components/property-form/property-form.component';
import {FormPropertyContainerComponent} from './pages/form-property-container/form-property-container.component';
import {InputTextComponent} from '../../../core/components/forms/input-text/input-text.component';
import {InputSwitchComponent} from '../../../core/components/forms/input-switch/input-switch.component';
import {ButtonSubmitComponent} from '../../../core/components/forms/button-submit/button-submit.component';
import {ButtonFloatComponent} from '../../../core/components/utils/button-float/button-float.component';
import {AlertComponent} from '../../../core/components/alert/alert.component';
import {DataSelectComponent} from '../../../core/components/data-select/data-select.component';
import {InputLabelComponent} from '../../../core/components/forms/input-label/input-label.component';
import {FilterTableComponent} from '../../../core/components/data-table/filter-table/filter-table.component';

@NgModule({
  imports: [
    // core module
    SharedModule,
    PropertyRoutingModule,
    // Component
    AdminLayoutModule,
    DataTableComponent,
    InputTextComponent,
    InputSwitchComponent,
    ButtonSubmitComponent,
    ButtonFloatComponent,
    AlertComponent,
    DataSelectComponent,
    InputLabelComponent,
    FilterTableComponent,
    // Store
    EffectsModule.forFeature([PropertyEffect]),
    StoreModule.forFeature(PROPERTY_STATE_NAME, PropertyReducer.reducer)
  ],
  declarations: [
    ListPropertyContainerComponent,
    PropertyListComponent,
    PropertyFormComponent,
    FormPropertyContainerComponent
  ]
})
export class PropertyModule {

}

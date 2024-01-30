import {NgModule} from '@angular/core';
import {ValueListComponent} from '../admin/value/components/value-list/value-list.component';
import {LoadComponent} from '../../core/components/utils/load/load.component';
import {DataTableComponent} from '../../core/components/data-table/data-table.component';
import {FilterTableComponent} from '../../core/components/data-table/filter-table/filter-table.component';
import {AlertComponent} from '../../core/components/alert/alert.component';
import {ButtonSubmitComponent} from '../../core/components/forms/button-submit/button-submit.component';
import {InputLabelComponent} from '../../core/components/forms/input-label/input-label.component';
import {InputTextComponent} from '../../core/components/forms/input-text/input-text.component';
import {DataSelectComponent} from '../../core/components/data-select/data-select.component';
import {EffectsModule} from '@ngrx/effects';
import {ValueEffect, ValueReducer} from '../admin/value/shared/store';
import {PROPERTY_STATE_NAME, PropertyEffect, PropertyReducer} from '../admin/property/shared/store';
import {StoreModule} from '@ngrx/store';
import {VALUE_STATE_NAME} from '../admin/value/shared/store/value.selector';
import {SharedModule} from '../../shared/shared.module';
import {ValueFormComponent} from '../admin/value/components/value-form/value-form.component';

@NgModule({
  declarations: [
    ValueListComponent,
    ValueFormComponent,
  ],
  imports: [
    SharedModule,
    // Custom component
    LoadComponent,
    DataTableComponent,
    FilterTableComponent,
    AlertComponent,
    ButtonSubmitComponent,
    InputLabelComponent,
    InputTextComponent,
    DataSelectComponent,
    // store
    EffectsModule.forFeature([ValueEffect]),
    EffectsModule.forFeature([PropertyEffect]),
    StoreModule.forFeature(VALUE_STATE_NAME, ValueReducer.reducer),
    StoreModule.forFeature(PROPERTY_STATE_NAME, PropertyReducer.reducer),
  ],
  exports: [
    ValueListComponent,
    // custom component
    ValueFormComponent,
    AlertComponent
  ]
})
export class ValueSharedModule {
}

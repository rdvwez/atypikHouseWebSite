import {NgModule} from '@angular/core';
import {AdminLayoutModule} from '../../../layout/layouts/admin-layout/admin-layout.module';
import {CategoryListComponent} from './components/category-list/category-list.component';
import {CategoryRoutingModule} from './category-routing.module';
import {ListCategoryContainerComponent} from './pages/list-category-container/list-category-container.component';
import {FormCategoryContainerComponent} from './pages/form-category-container/form-category-container.component';
import {SharedModule} from '../../../shared/shared.module';
import {EffectsModule} from '@ngrx/effects';
import {CATEGORY_STATE_NAME, CategoryEffect, categoryReducer} from './shared/store';
import {StoreModule} from '@ngrx/store';
import {CategoryFormComponent} from './components/category-form/category-form.component';
import {InputTextComponent} from '../../../core/components/forms/input-text/input-text.component';
import {InputSwitchComponent} from '../../../core/components/forms/input-switch/input-switch.component';
import {ButtonSubmitComponent} from '../../../core/components/forms/button-submit/button-submit.component';
import {ButtonFloatComponent} from '../../../core/components/utils/button-float/button-float.component';
import {DataTableComponent} from '../../../core/components/data-table/data-table.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AlertComponent} from '../../../core/components/alert/alert.component';
import {FilterTableComponent} from '../../../core/components/data-table/filter-table/filter-table.component';
import {LoadComponent} from '../../../core/components/utils/load/load.component';

@NgModule({
  imports: [
    SharedModule,
    AdminLayoutModule,
    CategoryRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    // components
    InputTextComponent,
    InputSwitchComponent,
    ButtonSubmitComponent,
    ButtonFloatComponent,
    DataTableComponent,
    AlertComponent,
    FilterTableComponent,
    LoadComponent,
    // State
    EffectsModule.forFeature([CategoryEffect]),
    StoreModule.forFeature(CATEGORY_STATE_NAME, categoryReducer.reducer)
  ],
  declarations: [
    CategoryListComponent,
    ListCategoryContainerComponent,
    FormCategoryContainerComponent,
    CategoryFormComponent
  ]
})
export class CategoryModule {

}

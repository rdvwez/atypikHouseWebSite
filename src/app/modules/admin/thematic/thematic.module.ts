import {NgModule} from '@angular/core';
import {ListThematicContainerComponent} from './pages/list-thematic-container/list-thematic-container.component';
import {ThematicRoutingModule} from './thematic-routing.module';
import {RouterModule} from '@angular/router';
import {EffectsModule} from '@ngrx/effects';
import {THEMATIC_STATE_NAME, ThematicEffect, thematicReducer} from './shared/store';
import {StoreModule} from '@ngrx/store';
import {ThematicListComponent} from './components/thematic-list/thematic-list.component';
import {SharedModule} from '../../../shared/shared.module';
import {DataTableComponent} from '../../../core/components/data-table/data-table.component';
import {AlertComponent} from '../../../core/components/alert/alert.component';
import {FormThematicContainerComponent} from './pages/form-thematic-container/form-thematic-container.component';
import {ThematicFormComponent} from './components/thematic-form/thematic-form.component';
import {InputSwitchComponent} from '../../../core/components/forms/input-switch/input-switch.component';
import {InputTextComponent} from '../../../core/components/forms/input-text/input-text.component';
import {ButtonSubmitComponent} from '../../../core/components/forms/button-submit/button-submit.component';
import {AdminLayoutModule} from '../../../layout/layouts/admin-layout/admin-layout.module';
import {LoadComponent} from '../../../core/components/utils/load/load.component';

@NgModule({
  imports: [
    ThematicRoutingModule,
    RouterModule,
    SharedModule,
    AdminLayoutModule,
    // component
    DataTableComponent,
    AlertComponent,
    InputSwitchComponent,
    InputTextComponent,
    ButtonSubmitComponent,
    LoadComponent,
    // store
    EffectsModule.forFeature([ThematicEffect]),
    StoreModule.forFeature(THEMATIC_STATE_NAME, thematicReducer.reducer)
  ],
  declarations: [
    ListThematicContainerComponent,
    ThematicListComponent,
    FormThematicContainerComponent,
    ThematicFormComponent
  ]
})

export class ThematicModule {

}

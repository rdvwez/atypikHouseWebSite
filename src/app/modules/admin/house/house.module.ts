import {NgModule} from '@angular/core';
import {SharedModule} from '../../../shared/shared.module';
import {HouseRoutingModule} from './house-routing.module';
import {AdminLayoutModule} from '../../../layout/layouts/admin-layout/admin-layout.module';
import {ListHouseContainerComponent} from './pages/list-house-container/list-house-container.component';
import {StoreModule} from '@ngrx/store';
import {HOUSE_STATE_NAME, houseReducer} from './shared/store';
import {EffectsModule} from '@ngrx/effects';
import {HouseEffect} from './shared/store/house.effect';
import {HouseListComponent} from './components/house-list/house-list.component';
import {LoadComponent} from '../../../core/components/utils/load/load.component';
import {DataTableComponent} from '../../../core/components/data-table/data-table.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    ListHouseContainerComponent,
    HouseListComponent
  ],
  imports: [
    SharedModule,
    HouseRoutingModule,
    // Custom component
    LoadComponent,
    DataTableComponent,
    AdminLayoutModule,
    NgbModule,
    // Store
    StoreModule.forFeature(HOUSE_STATE_NAME, houseReducer.reducer),
    EffectsModule.forFeature([HouseEffect])
  ]
})

export class HouseModule {

}

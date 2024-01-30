import {NgModule} from '@angular/core';
import {OwnerHouseComponent} from './pages/owner-house/owner-house.component';
import {OwnerHousesRoutingModule} from './owner-houses-routing.module';
import {StoreModule} from '@ngrx/store';
import {HOUSE_STATE_NAME, houseReducer} from '../../admin/house/shared/store';
import {EffectsModule} from '@ngrx/effects';
import {HouseEffect} from '../../admin/house/shared/store/house.effect';
import {StandardUserLayoutComponent} from '../../../layout/layouts/standard-user-layout/standard-user-layout.component';
import {HouseCardItemComponent} from './components/house-card-item/house-card-item.component';
import {SharedModule} from '../../../shared/shared.module';
import {NgbModule, NgbNavModule} from '@ng-bootstrap/ng-bootstrap';
import {FilterTableComponent} from '../../../core/components/data-table/filter-table/filter-table.component';
import {ButtonTextComponent} from '../../../core/components/utils/button-text/button-text.component';
import {HouseFormComponent} from './components/house-form/house-form.component';
import {FormHouseContainerComponent} from './pages/form-house-container/form-house-container.component';
import {InputTextComponent} from '../../../core/components/forms/input-text/input-text.component';
import {InputLabelComponent} from '../../../core/components/forms/input-label/input-label.component';
import {DataSelectComponent} from '../../../core/components/data-select/data-select.component';
import {InputSwitchComponent} from '../../../core/components/forms/input-switch/input-switch.component';
import {ButtonSubmitComponent} from '../../../core/components/forms/button-submit/button-submit.component';
import {HouseDetailComponent} from './components/house-detail/house-detail.component';
import {HouseDetailContainerComponent} from './pages/house-detail-container/house-detail-container.component';
import {ReservationComponent} from '../../destinations/pages/reservation/reservation.component';
import {HouseMapComponent} from '../../admin/house/components/house-map/house-map.component';
import {ContentTabDirective} from '../../admin/house/shared/directives/content-tab.directive';

@NgModule({
  declarations: [
    OwnerHouseComponent,
    HouseCardItemComponent,
    HouseFormComponent,
    FormHouseContainerComponent,
    HouseDetailComponent,
    HouseDetailContainerComponent
  ],
  exports: [
    HouseDetailComponent,
    HouseFormComponent
  ],
  imports: [
    SharedModule,
    OwnerHousesRoutingModule,
    StandardUserLayoutComponent,
    NgbModule,
    ReservationComponent,
    // custom component
    FilterTableComponent,
    ButtonTextComponent,
    InputTextComponent,
    InputLabelComponent,
    DataSelectComponent,
    ButtonTextComponent,
    InputSwitchComponent,
    ButtonSubmitComponent,
    HouseMapComponent,
    NgbNavModule,
    ContentTabDirective,
    // Store
    StoreModule.forFeature(HOUSE_STATE_NAME, houseReducer.reducer),
    EffectsModule.forFeature([HouseEffect]),
  ]
})
export class OwnerHouseModule {

}

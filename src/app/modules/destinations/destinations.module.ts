import {NgModule} from '@angular/core';
import {SharedModule} from '../../shared/shared.module';
import {DestinationComponent} from './pages/destination/destination.component';
import {DestinationsRoutingModule} from './destinations-routing.module';
import {ContactComponent} from './pages/contact/contact.component';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {HouseService} from '../admin/house/shared/service/house.service';
import {HouseSerializer} from '../admin/house/shared/serializer/house.serializer';
import {HttpClientModule} from '@angular/common/http';
import {NgbDropdownModule, NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import {SearchComponent} from './components/search/search.component';
import {DataSelectComponent} from '../../core/components/data-select/data-select.component';
import {ButtonSubmitComponent} from '../../core/components/forms/button-submit/button-submit.component';
import {DetailHouseComponent} from './pages/detail-house/detail-house.component';
import {CATEGORY_STATE_NAME, CategoryEffect, categoryReducer} from '../admin/category/shared/store';
import {THEMATIC_STATE_NAME, ThematicEffect, thematicReducer} from '../admin/thematic/shared/store';
import {HOUSE_STATE_NAME, houseReducer} from '../admin/house/shared/store';
import {HouseEffect} from '../admin/house/shared/store/house.effect';
import {OwnerHouseModule} from '../owner/houses/owner-house.module';
import {ItemHouseComponent} from './components/item-house/item-house.component';
import {FormReservationComponent} from '../owner/reservation/components/form-reservation/form-reservation.component';
import {AlertComponent} from '../../core/components/alert/alert.component';

@NgModule({
  declarations: [
    DestinationComponent,
    ContactComponent,
    DetailHouseComponent
  ],
  imports: [
    // components
    SearchComponent,
    DataSelectComponent,
    ButtonSubmitComponent,
    NgbPaginationModule,
    ItemHouseComponent,

    DestinationsRoutingModule,
    SharedModule,
    HttpClientModule,
    FormReservationComponent,
    // store module
    StoreModule.forFeature(CATEGORY_STATE_NAME, categoryReducer.reducer),
    StoreModule.forFeature(THEMATIC_STATE_NAME, thematicReducer.reducer),
    StoreModule.forFeature(HOUSE_STATE_NAME, houseReducer.reducer),

    EffectsModule.forFeature([CategoryEffect, ThematicEffect, HouseEffect]),
    NgbDropdownModule,
    OwnerHouseModule,
    AlertComponent
  ],
  providers: [
    HouseService,
    HouseSerializer
  ]
})

export class DestinationsModule {

}

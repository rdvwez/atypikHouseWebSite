import {NgModule} from '@angular/core';
import {HomeComponent} from './pages/home/home.component';
import {HomesRoutingModule} from './homes-routing.module';
import {SharedModule} from '../../shared/shared.module';
import {VisitorLayoutModule} from '../../layout/layouts/visitor-layout/visitor-layout.module';
import {StoreModule} from '@ngrx/store';
import {HOUSE_STATE_NAME, houseReducer} from '../admin/house/shared/store';
import {EffectsModule} from '@ngrx/effects';
import {HouseEffect} from '../admin/house/shared/store/house.effect';
import {ItemHouseComponent} from '../destinations/components/item-house/item-house.component';
import {SearchGeneralInputComponent} from './components/search-general-input/search-general-input.component';
import {CityCardComponent} from './components/city-card/city-card.component';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    HomesRoutingModule,
    VisitorLayoutModule,
    SharedModule,
    ItemHouseComponent,
    SearchGeneralInputComponent,
    CityCardComponent,
    // store
    StoreModule.forFeature(HOUSE_STATE_NAME, houseReducer.reducer),
    EffectsModule.forFeature([HouseEffect])
  ]
})

export class HomesModule {
}

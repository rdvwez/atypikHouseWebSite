import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {OwnerHouseComponent} from './pages/owner-house/owner-house.component';
import {CardContentOwnerComponent} from '../../../layout/layouts/card-content-owner/card-content-owner.component';
import {FormHouseContainerComponent} from './pages/form-house-container/form-house-container.component';
import {HouseDetailContainerComponent} from './pages/house-detail-container/house-detail-container.component';

const OWNER_HOUSE_MODULE: Routes = [
  {
    path: '',
    component: CardContentOwnerComponent,
    children: [
      {path: '', component: OwnerHouseComponent}
    ]
  },
  {
    path: 'form', children: [
      {
        path: '',
        component: FormHouseContainerComponent
      },
      {
        path: ':id',
        component: FormHouseContainerComponent
      }
    ]
  },
  {
    path: ':id',
    component: HouseDetailContainerComponent
  }
]

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forChild(OWNER_HOUSE_MODULE)
  ]
})

export class OwnerHousesRoutingModule {

}

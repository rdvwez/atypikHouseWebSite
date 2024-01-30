import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CardContentOwnerComponent} from '../../../layout/layouts/card-content-owner/card-content-owner.component';
import {OwnerValuesComponent} from './pages/owner-values/owner-values.component';
import {OwnerFormValueComponent} from './pages/owner-form-value/owner-form-value.component';

export const OWNER_ROUTES: Routes = [
  {
    path: '',
    component: CardContentOwnerComponent,
    children: [
      {path: '', component: OwnerValuesComponent}
    ]
  },
  {
    path: 'form', children: [
      {
        path: '',
        component: OwnerFormValueComponent
      },
      {
        path: ':id',
        component: OwnerFormValueComponent
      }
    ]
  },
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forChild(OWNER_ROUTES)
  ]
})
export class ValuesRoutingModule {

}

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListPropertyContainerComponent} from './pages/list-property-container/list-property-container.component';
import {FormPropertyContainerComponent} from './pages/form-property-container/form-property-container.component';

const PROPERTY_ROUTES_CONST: Routes = [
  {path: '', component: ListPropertyContainerComponent},
  {
    path: 'form', children: [
      {
        path: '',
        component: FormPropertyContainerComponent
      },
      {
        path: ':id',
        component: FormPropertyContainerComponent
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(PROPERTY_ROUTES_CONST)],
  exports: [RouterModule]
})

export class PropertyRoutingModule {

}

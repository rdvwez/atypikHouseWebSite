import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListValueContainerComponent} from './pages/list-value-container/list-value-container.component';
import {FormValueContainerComponent} from './pages/form-value-container/form-value-container.component';
import {CardListLayoutComponent} from '../../../layout/layouts/card-list-layout/card-list-layout.component';

const VALUE_ROUTES: Routes = [
  {
    path: '',
    component: CardListLayoutComponent,
    children: [
      {
        path: '',
        component: ListValueContainerComponent
      }
    ],
  },
  {
    path: 'form', children: [
      {
        path: '',
        component: FormValueContainerComponent
      },
      {
        path: ':id',
        component: FormValueContainerComponent
      }
    ]
  },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(VALUE_ROUTES)]
})
export class ValueRoutingModule {

}

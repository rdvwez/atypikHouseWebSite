import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ListCategoryContainerComponent} from './pages/list-category-container/list-category-container.component';
import {FormCategoryContainerComponent} from './pages/form-category-container/form-category-container.component';
import {CardListLayoutComponent} from '../../../layout/layouts/card-list-layout/card-list-layout.component';

const CATEGORY_ROUTES = [
  {
    path: '',
    component: CardListLayoutComponent,
    children: [
      {path: '', component: ListCategoryContainerComponent}
    ]
  },
  {
    path: 'form', children: [
      {
        path: '',
        component: FormCategoryContainerComponent
      },
      {
        path: ':id',
        component: FormCategoryContainerComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(CATEGORY_ROUTES)],
  exports: [RouterModule]
})
export class CategoryRoutingModule {

}

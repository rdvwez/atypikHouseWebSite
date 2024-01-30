import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ListThematicContainerComponent} from './pages/list-thematic-container/list-thematic-container.component';
import {FormThematicContainerComponent} from './pages/form-thematic-container/form-thematic-container.component';

const THEMATIC_ROUTES = [
  {path: '', component: ListThematicContainerComponent},
  {
    path: 'form', children: [
      {
        path: '',
        component: FormThematicContainerComponent
      },
      {
        path: ':id',
        component: FormThematicContainerComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(THEMATIC_ROUTES)],
  exports: [RouterModule]
})
export class ThematicRoutingModule {

}

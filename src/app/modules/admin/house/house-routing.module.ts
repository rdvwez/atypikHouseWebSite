import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListHouseContainerComponent} from './pages/list-house-container/list-house-container.component';

const HOUSE_ROUTES: Routes = [
  {path: '', component: ListHouseContainerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(HOUSE_ROUTES)],
  exports: [RouterModule]
})
export class HouseRoutingModule {
}

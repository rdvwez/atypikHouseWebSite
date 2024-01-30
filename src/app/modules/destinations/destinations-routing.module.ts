import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DestinationComponent} from './pages/destination/destination.component';
import {ContactComponent} from './pages/contact/contact.component';
import {DetailHouseComponent} from './pages/detail-house/detail-house.component';

const DESTINATION_ROUTES: Routes = [
  {
    path: 'destinations',
    title: "AtypikHouse - Location d'hébergement alternative - Les destinations les plus populaires",
    component: DestinationComponent
  },
  {
    path: 'contact',
    title: "AtypikHouse - Location d'hébergement alternative - Conatcter nous",
    component: ContactComponent
  },
  {
    path: 'destinations/:id',
    title: "AtypikHouse - Location d'hébergement alternative - Details d'un hébergement",
    component: DetailHouseComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(DESTINATION_ROUTES)],
  exports: [RouterModule]
})

export class DestinationsRoutingModule {

}

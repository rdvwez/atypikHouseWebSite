import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { InspirationsComponent } from './pages/inspirations/inspirations.component';

const INSPIRATIONS_ROUTES: Routes = [

  {path: 'inspirations',title:"AtypikHouse - Location d'hébergement alternative - Vous sentez vous inspirer?", component: InspirationsComponent},
]

@NgModule({
  imports: [RouterModule.forChild(INSPIRATIONS_ROUTES)],
  exports: [RouterModule]
})

export class InspirationsRoutingModule {

}

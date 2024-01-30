import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CguComponent} from './pages/cgu/cgu.component';
import {MentionsLegalesComponent} from './pages/mentions-legales/mentions-legales.component';
import {PolitiqueDeConfidentialiteComponent} from './pages/politique-de-confidentialite/politique-de-confidentialite.component';

const LEGALDOCUMENTS_ROUTES: Routes = [
  {path: 'cgu', component: CguComponent},
  {path: 'mentions-legales', title:"AtypikHouse - Location d'hébergement alternative - Mentions légales", component: MentionsLegalesComponent},
  {path: 'politique-de-confidentialite', component: PolitiqueDeConfidentialiteComponent},
]

@NgModule({
  imports: [RouterModule.forChild(LEGALDOCUMENTS_ROUTES)],
  exports: [RouterModule]
})

export class LegalDocumentsRoutingModule {

}

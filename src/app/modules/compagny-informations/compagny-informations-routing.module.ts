import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {QuiSommeNousComponent} from './pages/qui-somme-nous/qui-somme-nous.component';
import {ResponsabiliteComponent} from './pages/responsabilite/responsabilite.component';
import {TarifComponent} from './pages/tarif/tarif.component'


const COMPAGNYINFORMATIONS_ROUTES: Routes = [
  {path: 'qui-sommes-nous', title:"AtypikHouse - Location d'hébergement alternative - Qui sommes nous ?", component: QuiSommeNousComponent},
  {path: 'responsabilite', title:"AtypikHouse - Location d'hébergement alternative - Les responsabilités d'AtypikHouse", component: ResponsabiliteComponent},
  {path: 'tarifs', title:"AtypikHouse - Location d'hébergement alternative - Les tarifs d'AtypikHouse", component: TarifComponent},
]

@NgModule({
  imports: [RouterModule.forChild(COMPAGNYINFORMATIONS_ROUTES)],
  exports: [RouterModule]
})

export class CompagnyInformationsRoutingModule {

}

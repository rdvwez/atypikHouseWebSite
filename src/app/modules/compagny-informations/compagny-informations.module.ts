import {NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import {QuiSommeNousComponent} from './pages/qui-somme-nous/qui-somme-nous.component';
import { VisitorLayoutModule } from 'src/app/layout/layouts/visitor-layout/visitor-layout.module';
import { CompagnyInformationsRoutingModule } from './compagny-informations-routing.module';
import { ResponsabiliteComponent } from './pages/responsabilite/responsabilite.component';
import { TarifComponent } from './pages/tarif/tarif.component';


@NgModule({
  declarations: [
    QuiSommeNousComponent,
    ResponsabiliteComponent,
    TarifComponent,
  ],
  imports: [
    RouterModule,
    VisitorLayoutModule,
    CompagnyInformationsRoutingModule
  ],

})

export class CompagnyInformationsModule {

}

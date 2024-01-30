import {NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import {CguComponent} from './pages/cgu/cgu.component';
import {MentionsLegalesComponent} from './pages/mentions-legales/mentions-legales.component';
import {PolitiqueDeConfidentialiteComponent} from './pages/politique-de-confidentialite/politique-de-confidentialite.component';
import { VisitorLayoutModule } from 'src/app/layout/layouts/visitor-layout/visitor-layout.module';
import { LegalDocumentsRoutingModule } from './legal-documents-routing.module';


@NgModule({
  declarations: [
    CguComponent,
    MentionsLegalesComponent,
    PolitiqueDeConfidentialiteComponent,
  ],
  imports: [
    RouterModule,
    VisitorLayoutModule,
    LegalDocumentsRoutingModule
  ],

})

export class LegalDocumentsModule {

}

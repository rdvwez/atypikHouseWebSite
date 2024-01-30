import {NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { VisitorLayoutModule } from 'src/app/layout/layouts/visitor-layout/visitor-layout.module';
import { InspirationsComponent } from './pages/inspirations/inspirations.component';
import {InspirationsRoutingModule} from './inspirations-routing.module'

@NgModule({
  declarations: [
    InspirationsComponent
  ],
  imports: [
    RouterModule,
    VisitorLayoutModule,
    InspirationsRoutingModule
  ],
})

export class InspirationsModule {

}

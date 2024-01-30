import {NgModule} from '@angular/core';
import {VisitorLayoutComponent} from './visitor-layout.component';
import {TopBarComponent} from '../../common/top-bar/top-bar.component';
import {FooterComponent} from '../../common/footer/footer.component';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../../../shared/shared.module';

@NgModule({
  declarations: [
    VisitorLayoutComponent
  ],
  imports: [
    RouterModule,
    SharedModule,
    TopBarComponent,
    FooterComponent
  ]
})
export class VisitorLayoutModule {

}

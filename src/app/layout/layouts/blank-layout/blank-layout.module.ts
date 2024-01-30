import {NgModule} from '@angular/core';
import {SharedModule} from '../../../shared/shared.module';
import {BlankLayoutComponent} from './blank-layout.component';
import {AuthHeaderComponent} from '../../common/auth-header/auth-header.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AuthHeaderComponent,
    BlankLayoutComponent
  ],
  imports: [
    SharedModule,
    RouterModule,
  ],
  exports: [BlankLayoutComponent]
})

export class BlankLayoutModule {

}

import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AdminLayoutComponent} from './admin-layout.component';
import {SharedModule} from '../../../shared/shared.module';
import {AsideAdminComponent} from './component/aside-admin/aside-admin.component';
import {TopbarAdminComponent} from './component/topbar-admin/topbar-admin.component';
import {NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';
import {TitlePageComponent} from './component/title-page/title-page.component';

@NgModule({
  declarations: [
    AdminLayoutComponent
  ],
  imports: [
    SharedModule,
    RouterModule,
    // components
    TopbarAdminComponent,
    AsideAdminComponent,
    TitlePageComponent,
    NgbDropdownModule
  ],
  exports: [
    AdminLayoutComponent
  ]
})

export class AdminLayoutModule {

}

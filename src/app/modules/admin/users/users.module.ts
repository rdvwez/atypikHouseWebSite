import {NgModule} from '@angular/core';
import {UsersRoutingModule} from './users-routing.module';
import {AccountUserComponent} from './pages/account-user/account-user.component';
import {ListUsersContainerComponent} from './pages/list-users-container/list-users-container.component';
import {AdminLayoutModule} from '../../../layout/layouts/admin-layout/admin-layout.module';
import {SharedModule} from '../../../shared/shared.module';
import {EffectsModule} from '@ngrx/effects';
import {USERS_STATE_NAME, UsersEffect, usersReducer} from './shared/store';
import {StoreModule} from '@ngrx/store';
import {UsersListComponent} from './component/users-list/users-list.component';
import {DataTableComponent} from '../../../core/components/data-table/data-table.component';
import {LoadComponent} from '../../../core/components/utils/load/load.component';

@NgModule({
  declarations: [
    AccountUserComponent,
    ListUsersContainerComponent,
    UsersListComponent
  ],
  imports: [
    SharedModule,
    UsersRoutingModule,
    // custom components
    AdminLayoutModule,
    DataTableComponent,
    LoadComponent,
    // store
    EffectsModule.forFeature([UsersEffect]),
    StoreModule.forFeature(USERS_STATE_NAME, usersReducer.reducer)
  ]
})

export class UsersModule {

}

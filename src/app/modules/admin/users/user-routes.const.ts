import {Routes} from '@angular/router';
import {ListUsersContainerComponent} from './pages/list-users-container/list-users-container.component';

export const USERS_ROUTES: Routes = [
  {path: '', component: ListUsersContainerComponent},
];

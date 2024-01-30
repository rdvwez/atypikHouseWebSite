import {Routes} from '@angular/router';
import {SignInComponent} from './pages/sign-in/sign-in.component';
import {SignupComponent} from './pages/signup/signup.component';
import { RedirectComponent } from './pages/redirect/redirect.component';

export const AUTH_ROUTES_CONST: Routes = [
  { path: 'signin', component :  SignInComponent},
  { path: 'signup', component :  SignupComponent},
  { path: 'redirect', component :  RedirectComponent},
]

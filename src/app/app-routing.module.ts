import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DataUserGuard } from './shared/guards/data-user.guard';

const APP_ROUTES: Routes = [
  { path : '', component : HomeComponent },
  { path : 'login',component : LoginComponent },
  // { path : 'login',canActivate:[DataUserGuard], component : LoginComponent },
  { path : 'register', component : RegisterComponent },
  { path : 'locations', component : LoginComponent },
  { path : 'profil', component : LoginComponent },
  { path : 'account', component : AccountComponent },
  // { path : 'register', component : RegisterComponent },
  // { path : 'destnation', component : DestinationComponent },
  // { path : 'hebergement', component : HebergementComponent },
  // { path : 'idee', component : IdeeComponent },
  // { path : 'locations', component : LocationComponent,
  //   children: [
  //     {path:'new',component:LocationFormComponent},
  //     {path:':id/edit',component:LocationFormComponent},
  //     {path:':id',component:LocationDetailsComponent},
  //     {path!:}
  //   ]
  // },
  // { path : '**', component : NotFoundComponent },
  // { path : '**', redirectTo : '' },
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

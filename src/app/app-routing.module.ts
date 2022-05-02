import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const APP_ROUTES: Routes = [
  { path : '', component : HomeComponent },
  { path : 'login', component : LoginComponent },
  { path : 'locations', component : LoginComponent },
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

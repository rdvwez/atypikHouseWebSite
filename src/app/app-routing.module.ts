import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const APP_ROUTES: Routes = [
  { path : '', component : HomeComponent },
  { path : 'login', component : LoginComponent },
<<<<<<< HEAD
  { path : 'register', component : RegisterComponent }
=======
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
>>>>>>> e7aa3683964886f212a2b2682dc5fbd40d6c8bcf
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

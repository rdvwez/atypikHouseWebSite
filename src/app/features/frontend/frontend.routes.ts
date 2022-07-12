import { Routes } from "@angular/router";

import { DestinationsComponent } from "./destinations/destinations.component";
import { HebergementsComponent } from "./hebergements/hebergements.component";
import { HomeComponent } from "./home/home.component";
import { IdeesComponent } from "./idees/idees.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";



export const FRONTEND_ROUTES: Routes = [
    { path : '', component : HomeComponent },
    { path : 'login', component : LoginComponent },
    { path : 'register', component : RegisterComponent },
    { path : 'locations', component : LoginComponent },
    { path : 'hebergements', component : HebergementsComponent },
    { path : 'destinations', component : DestinationsComponent },
    { path : 'idees', component : IdeesComponent },
    // { path : 'profil',canActivate:[DataUserGuard], component : LoginComponent },
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
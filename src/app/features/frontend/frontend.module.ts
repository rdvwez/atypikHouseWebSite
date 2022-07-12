import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from 'src/app/app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeadhComponent } from './headh/headh.component';
import { SearchbarComponent } from './body/searchbar/searchbar.component';
import { BodyComponent } from './body/body.component'; 
import { LocationListComponent } from './body/location-list/location-list.component'; 
import { DestinationsComponent } from 'src/app/features/frontend/destinations/destinations.component';
import { AccountComponent } from '../backend/account/account.component';
import { FooterComponent } from './footer/footer.component';
import { FooterbComponent } from './footerb/footerb.component';
import { HeaddComponent } from './headd/headd.component';
import { HeadiComponent } from './headi/headi.component';
import { HebergementsComponent } from './hebergements/hebergements.component';
import { HomeComponent } from './home/home.component';
import { IdeesComponent } from './idees/idees.component';
// import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';

import { FRONTEND_ROUTES } from './frontend.routes'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    // AppComponent,
    NavbarComponent,
    BodyComponent,
    FooterComponent,
    HomeComponent,
    HebergementsComponent,
    DestinationsComponent,
    SearchbarComponent,
    LocationListComponent,
    AccountComponent,
    SearchbarComponent,
    LocationListComponent,
    HeadhComponent,
    FooterbComponent,
    HeaddComponent,
    IdeesComponent,
    HeadiComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(FRONTEND_ROUTES)
  ]
})
export class FrontendModule { }

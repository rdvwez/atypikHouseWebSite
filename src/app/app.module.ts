import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SearchbarComponent } from './body/searchbar/searchbar.component';
import { LocationListComponent } from './body/location-list/location-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BodyComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    SearchbarComponent,
    LocationListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

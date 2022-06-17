import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HebergementsComponent } from './hebergements/hebergements.component';
import { DestinationsComponent } from './destinations/destinations.component';
import { RegisterComponent } from './register/register.component';
import { SearchbarComponent } from './body/searchbar/searchbar.component';
import { LocationListComponent } from './body/location-list/location-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http'

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AccountComponent } from './account/account.component';
import { TransferHttpCacheModule } from '@nguniversal/common'

import { HeadhComponent } from './headh/headh.component';
import { FooterbComponent } from './footerb/footerb.component';
import { HeaddComponent } from './headd/headd.component';
import { IdeesComponent } from './idees/idees.component';
import { HeadiComponent } from './headi/headi.component';
import {TokenService} from "./shared/services/token.service";
import {AuthconfigInterceptor} from "./shared/interceptors/authconfig.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BodyComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    HebergementsComponent,
    DestinationsComponent,
    SearchbarComponent,
    LocationListComponent,
    RegisterComponent,
    AccountComponent,
    RegisterComponent,
    SearchbarComponent,
    LocationListComponent,
    HeadhComponent,
    FooterbComponent,
    HeaddComponent,
    IdeesComponent,
    HeadiComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgbModule,
    TransferHttpCacheModule,
  ],
  providers: [
    TokenService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthconfigInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

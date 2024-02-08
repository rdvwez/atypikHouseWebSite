import {LOCALE_ID, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {appReducer} from './shared/store/app.state';
import {environment} from '../environments/environment';
import {AuthService} from './modules/auth/shared/service/auth.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {TokenService} from './modules/auth/shared/service/token.service';
import {AuthInterceptor} from './shared/interceptors/auth.interceptor';
import {TokenInterceptor} from './modules/auth/shared/interceptors/token.interceptor';
import {AuthEffect, UserConnectedEffect} from './modules/auth/shared/store';
import {InitialDataResolver} from './initial-data.resolver';
import localeFr from '@angular/common/locales/fr';
import {registerLocaleData} from '@angular/common';

registerLocaleData(localeFr);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(appReducer),
    EffectsModule.forRoot([UserConnectedEffect, AuthEffect]),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production, connectInZone: true})
  ],
  providers: [
    AuthService,
    TokenService,
    {
      provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true
    },
    {
      provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true
    },
    InitialDataResolver,
    {
      provide: LOCALE_ID,
      useValue: 'fr-FR'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

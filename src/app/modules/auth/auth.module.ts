import {NgModule} from '@angular/core';
import {SharedModule} from '../../shared/shared.module';
import {AuthRoutingModule} from './auth-routing.module';
import {SignInComponent} from './pages/sign-in/sign-in.component';
import {SignupComponent} from './pages/signup/signup.component';
import {BlankLayoutModule} from '../../layout/layouts/blank-layout/blank-layout.module';
import {TextPageComponent} from '../../core/components/utils/text-page/text-page.component';
import {TitleComponent} from '../../core/components/utils/title/title.component';
import {PasswordFormComponent} from '../../core/components/forms/password-form/password-form.component';
import {InputTextComponent} from '../../core/components/forms/input-text/input-text.component';
import {ButtonSubmitComponent} from '../../core/components/forms/button-submit/button-submit.component';
import {LinkComponent} from '../../core/components/utils/link/link.component';
import {HttpClientModule} from '@angular/common/http';
import {AlertComponent} from '../../core/components/alert/alert.component';
import { GoogleLoginButtonComponent } from './pages/google-login-button/google-login-button.component';
import { RedirectComponent } from './pages/redirect/redirect.component';

@NgModule({
  declarations: [
    SignInComponent,
    SignupComponent,
    GoogleLoginButtonComponent,
    RedirectComponent
  ],
  imports: [
    HttpClientModule,
    SharedModule,
    AuthRoutingModule,
    BlankLayoutModule,
    // components
    TextPageComponent,
    TitleComponent,
    TextPageComponent,
    InputTextComponent,
    ButtonSubmitComponent,
    LinkComponent,
    PasswordFormComponent,
    AlertComponent
  ]
})

export class AuthModule {

}

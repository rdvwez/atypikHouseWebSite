import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PASSWORD_REGEX, PasswordValidation} from '../../shared/constant/validators-form.constant';
import {AUTH_CONST} from '../../shared/constant/auth.constant';
import {Observable, Subject, takeUntil} from 'rxjs';
import {TypeAlert} from '../../../../core/components/alert/alert.component';
import {select, Store} from '@ngrx/store';
import {AuthActions, ConnectState, selectErrorAuth} from '../../shared/store';
import {selectLoading} from '../../../../core/components/utils/load/store';
import {AuthService} from '../../shared/service/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignupComponent implements OnInit, OnDestroy {
  typeAlert = TypeAlert;
  authConst = AUTH_CONST;
  alert: TypeAlert = TypeAlert.INIT;

  errorMessage$: Observable<string | undefined> = this._store.pipe(select(selectErrorAuth));
  messageResponse: string = '';
  loading$: Observable<boolean | undefined> = this._store.pipe(select(selectLoading));
  signupForm: FormGroup;

  private destroyed$: Subject<void> = new Subject();

  title = "AtypikHouse - Location d'hébergement alternative - Formulaire de creation de compte";

  // Définition des différentes balises pour le SEO
  updateTag() {
    this.metaService.addTag({rel: 'canonical', href: "https://www.atypikhouse.com/auth/signup"});
    this.metaService.updateTag({httpEquiv: 'Content-Type', content: 'text/html'}); // Indique aux agents et serveurs de prendre le contenu de cette page en tant que HTML
    this.metaService.updateTag({property: 'og-type', content: "Site web"}); /* Indique le type de l'objet */
    this.metaService.updateTag({name: 'robots', content: 'noindex, nofollow'}); // Permet au robot d'indexer la page
    this.metaService.updateTag({ name: 'keywords', content: 'hébergement alternative europe' })
    this.metaService.updateTag({
      property: 'og:title',
      content: "AtypiHouse - Location d'hébergement alternative - Formulaire de creation de compte"
    }) // Titre pour l'encadré dans les recherches
    this.metaService.updateTag({ name: 'description', content: `Rejoignez la communauté AtypikHouse et créez votre compte dès maintenant. Vivez des expériences uniques en réservant des hébergements insolites partout en France et dans le monde. Remplissez le formulaire avec votre nom d'utilisateur, adresse e-mail et mot de passe, et commencez à planifier votre prochain séjour inoubliable. Si vous avez déjà un compte, connectez-vous ici.`})
  }

  constructor(
    private metaService: Meta,
    private titleService: Title,
    private fb: FormBuilder,
    private _store: Store<ConnectState>,
    private authService: AuthService
  ) {
    this.titleService.setTitle(this.title);
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.signupForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(PASSWORD_REGEX)]],
      confirm: ['', [Validators.required]],
    }, {
      validators: PasswordValidation.MatchPassword
    });
  }

  signUpClick(): void {
    // Verify errors Signup
    if (this.signupForm.invalid) {
      return;
    }
    // format credential params
    let {email, password, username} = this.signupForm.value;
    // dispatch actions to register user
    this._store.dispatch(AuthActions.authRegister({
      credential: {
        email,
        password,
        username
      }
    }));
    // checking status message
    this.errorMessage$.pipe(
      takeUntil(this.destroyed$)
    ).subscribe({
      next: (result: string | undefined) => {
        if (result) {
          this.alert = TypeAlert.ERROR;
          this.messageResponse = result;
        }
      }
    })
  }
// ************************ à voir avec Daco
  onCustomSignup() {
    this.authService.signInWithGoogle()
  }

  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}

import {Component, OnDestroy, OnInit} from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';
import {AUTH_CONST} from '../../shared/constant/auth.constant';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PASSWORD_REGEX} from '../../shared/constant/validators-form.constant';
import {select, Store} from '@ngrx/store';
import {AuthActions, selectAuthLoading, selectErrorAuth} from '../../shared/store';
import {Observable, Subject, takeUntil} from 'rxjs';
import {TypeAlert} from '../../../../core/components/alert/alert.component';
import {AuthService} from '../../shared/service/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit, OnDestroy {
  authConst = AUTH_CONST;
  authForm: FormGroup;
  alert: TypeAlert;

  private destroyed$: Subject<void> = new Subject<any>();
  errorMessage$: Observable<string | undefined> = this._store.pipe(select(selectErrorAuth));
  messageResponse: string = '';

  loading$: Observable<boolean | undefined> = this._store.pipe(select(selectAuthLoading));
  title = "AtypikHouse - Location d'hébergement alternative - Formulaire de connection";

  // Définition des différentes balises pour le SEO
  updateTag() {
    this.metaService.addTag({rel: 'canonical', href: "https://www.atypikhouse.com/auth/signin"});
    this.metaService.updateTag({httpEquiv: 'Content-Type', content: 'text/html'}); // Indique aux agents et serveurs de prendre le contenu de cette page en tant que HTML
    this.metaService.updateTag({property: 'og-type', content: "Site web"}); /* Indique le type de l'objet */
    this.metaService.updateTag({name: 'robots', content: 'noindex, nofollow'}); // Permet au robot d'indexer la page
    this.metaService.updateTag({ name: 'keywords', content: 'hébergement alternative europe' })
    this.metaService.updateTag({
      property: 'og:title',
      content: "AtypiHouse - Location d'hébergement alternative - Formulaire de connection"
    }) // Titre pour l'encadré dans les recherches  
    this.metaService.updateTag({ name: 'description', content: `Connectez-vous à votre compte AtypikHouse. Bienvenue pour vivre des expériences uniques dans nos hébergements insolites. Utilisez votre adresse e-mail et mot de passe pour accéder à votre compte. Vous pouvez également vous connecter rapidement avec votre compte Google. Si vous n'avez pas de compte, inscrivez-vous dès maintenant et découvrez un monde d'hébergements personnalisés.`})
  }

  constructor(
    private metaService: Meta,
    private titleService: Title,
    private fb: FormBuilder,
    private _store: Store,
    private authService: AuthService
  ) {
    // this.metaService.removeTag("name='description'");
    this.titleService.setTitle(this.title);
    this.updateTag();
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.authForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(PASSWORD_REGEX)]]
    });
  }

  login(): void {
    if (this.authForm.invalid) {
      return;
    }
    // Dispatch login action
    this._store.dispatch(AuthActions.login({credential: this.authForm.value}));
    // checking status message
    this.getError();
  }

  onCustomSignin() {
    // let service = inject(AuthService)
    this.authService.signInWithGoogle()
    // this._store.dispatch(AuthActions.loginGoogle());
    // checking status message
    // this.getError();
  }

  getError() {
    this.errorMessage$.pipe(
      takeUntil(this.destroyed$)
    ).subscribe({
      next: (result: string | undefined) => {
        if (result) {
          this.alert = TypeAlert.ERROR;
          this.messageResponse = result;
        }
      }
    });
  }

  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}

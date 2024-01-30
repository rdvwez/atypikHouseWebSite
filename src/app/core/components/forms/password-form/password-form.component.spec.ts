import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PasswordFormComponent} from './password-form.component';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {SharedModule} from '../../../../shared/shared.module';
import {ErrorMessageComponent} from '../error-message/error-message.component';
import {InputLabelComponent} from '../input-label/input-label.component';
import {RouterModule} from '@angular/router';
import {By} from '@angular/platform-browser';
import {LinkComponent} from '../../utils/link/link.component';
import {AUTH_CONST} from '../../../../modules/auth/shared/constant/auth.constant';

describe('PasswordFormComponent', () => {
  let component: PasswordFormComponent;
  let fixture: ComponentFixture<PasswordFormComponent>;
  let fb: FormBuilder;
  let authConst: any;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: [
          PasswordFormComponent,
          SharedModule,
          ErrorMessageComponent,
          InputLabelComponent,
          RouterModule.forRoot([])
        ],
        providers: [FormBuilder],
      })
      .compileComponents();

    fixture = TestBed.createComponent(PasswordFormComponent);
    component = fixture.componentInstance;
    fb = TestBed.inject(FormBuilder);

    // init variables
    component.formName = 'name';
    component.forInput = 'signInPassword';
    component.formGroup = new FormGroup({
      name: new FormControl()
    });

    component.label = 'Hello';
    component.errorMessage = 'Mot de passe obligatoire';
    authConst = AUTH_CONST;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should display errorMessage text', () => {
    // make formGroup errros
    component.formGroup.get('name')?.markAsTouched();
    component.formGroup.get('name')?.setErrors({required: true});

    fixture.detectChanges();
    const appErrorMessage = fixture.nativeElement.querySelector('app-error-message');

    expect(appErrorMessage).toBeTruthy();
    expect(appErrorMessage.textContent).toContain(component.errorMessage);
  });
  it('Should render label input', () => {
    const appLabelElement = fixture.nativeElement.querySelector('app-input-label');
    expect(appLabelElement).toBeTruthy();
    expect(appLabelElement.textContent).toContain(component.label);
  });

  it('should render a element', () => {
    const aElement = fixture.nativeElement.querySelector('a.input-group-append');
    expect(aElement).toBeTruthy();
    expect(aElement.classList).toContain('input-group-append');
    expect(aElement.classList).toContain('input-group-text');
  });

  it('Should make not visible icon eye password', () => {
    // Make isVisible false && test icon password
    component.show = false;
    component.isVisible();
    fixture.detectChanges();
    const iElement = fixture.nativeElement.querySelector('i');
    expect(component.show).toBeTrue();
    expect(iElement.classList).toContain('bi-eye');

    // Make show true && test icon password
    component.isVisible();
    fixture.detectChanges();
    expect(component.show).toBeFalse();
    expect(iElement.classList).toContain('bi-eye-slash');
  });

  it('Should render div element', () => {
    const divElement = fixture.nativeElement.querySelector('.input-group');
    expect(divElement).toBeTruthy();
    expect(divElement.classList).toContain('input-group');
    expect(divElement.classList).toContain('input-group-merge');
  });

  it('Should render app link', () => {
    const appLinkComponent = fixture.debugElement.query(By.directive(LinkComponent))
    expect(appLinkComponent).toBeTruthy();
    expect(appLinkComponent.nativeElement.textContent.trim()).toBe(authConst.wording.forgotPassword);
    expect(appLinkComponent.nativeElement.getAttribute('ng-reflect-url-link')).toBe('/password-forget')
  });
});

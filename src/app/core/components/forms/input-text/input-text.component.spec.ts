import {ComponentFixture, TestBed} from '@angular/core/testing';

import {InputTextComponent} from './input-text.component';
import {SharedModule} from '../../../../shared/shared.module';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

describe('InputTextComponent', () => {
  let component: InputTextComponent;
  let fixture: ComponentFixture<InputTextComponent>;
  let fb: FormBuilder;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: [
          InputTextComponent,
          SharedModule
        ],
        providers: [FormBuilder]
      })
      .compileComponents();

    fixture = TestBed.createComponent(InputTextComponent);
    component = fixture.componentInstance;
    fb = TestBed.inject(FormBuilder)
    // init input variable
    component.type = 'text';
    component.customClass = 'form-control form-control-lg';
    component.label = 'Email';
    component.formGroup = new FormGroup<any>({
      email: new FormControl()
    });
    component.formName = 'email';
    component.forInput = 'forEmail';
    component.placeHolder = 'Email';
    component.customClass = 'customClass';
    component.errorMessage = 'error';

    fixture.detectChanges();
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should render app label input', () => {
    const appInputLabel = fixture.nativeElement.querySelector('app-input-label');
    expect(appInputLabel).toBeTruthy();
    expect(appInputLabel.textContent).toContain('Email');
  });

  it('Should render input && message input', () => {
    const inputElement = fixture.nativeElement.querySelector('input');

    expect(inputElement).toBeTruthy();
    expect(inputElement.getAttribute('type')).toContain('text');
    expect(inputElement.classList).toContain('customClass');
    expect(inputElement.getAttribute('name')).toContain(component.formName);
    expect(inputElement.getAttribute('id')).toContain(component.forInput);
    expect(inputElement.getAttribute('placeHolder')).toContain('Email');
  });

  it('Should not display error message when form is not touched', () => {

    const errorMessageElement = fixture.nativeElement.querySelector('app-error-message');
    component.formGroup.get('email')?.markAsTouched();

    expect(errorMessageElement).toBeFalsy();
    expect(component.isErrorForm()).toBeFalse();
  })

  it('Should not display error message when has errors', () => {
    const errorMessageElement = fixture.nativeElement.querySelector('app-error-message');
    component.formGroup.get('email')?.setErrors({required: true});

    expect(errorMessageElement).toBeFalsy();
    expect(component.isErrorForm()).toBeFalse();
  })

  it('Should display errors message when form is touched && has errors', () => {
    component.formGroup.get('email')?.markAsTouched();
    component.formGroup.get('email')?.setErrors({required: true});

    fixture.detectChanges();
    const spanElement = fixture.nativeElement.querySelector('app-error-message');

    expect(spanElement).toBeTruthy();
    expect(component.isErrorForm()).toBeTrue();
    expect(spanElement.textContent).toContain('error')
  });

  it('errorClassValidation should return custom-class class when form is dirty', () => {
    // we suppose there's no errros
    component.formGroup.get('email')?.markAsDirty();
    expect(component.errorClassValidation()).toEqual('customClass');
  });

  it('errorClassValidation should return custom-class class when form has errors', () => {
    // we suppose there's no errros
    component.formGroup.get('email')?.setErrors({required: true});
    expect(component.errorClassValidation()).toEqual('customClass');
  });

  it('errorClassValidation should return custom-class && is-invalid', () => {

    component.formGroup.get('email')?.markAsDirty();
    component.formGroup.get('email')?.setErrors({required: true});

    expect(component.errorClassValidation()).toBe("customClass is-invalid")

  })
});

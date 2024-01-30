import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ButtonSubmitComponent} from './button-submit.component';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {SharedModule} from '../../../../shared/shared.module';

describe('ButtonSubmitComponent', () => {
  let component: ButtonSubmitComponent;
  let fixture: ComponentFixture<ButtonSubmitComponent>;
  let fb: FormBuilder;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: [
          ButtonSubmitComponent,
          SharedModule
        ],
        providers: [FormBuilder]
      })
      .compileComponents();

    fixture = TestBed.createComponent(ButtonSubmitComponent);
    component = fixture.componentInstance;
    fb = TestBed.inject(FormBuilder);
    // init variable
    component.customClass = 'custom-class';
    component.formGroup = new FormGroup<any>({
      name: new FormControl()
    })
    fixture.detectChanges();
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should apply custom class to the button', () => {
    const buttonElement = fixture.nativeElement.querySelector('button');
    expect(buttonElement).toBeTruthy();
    expect(buttonElement.classList).toContain('custom-class')
  })

  it('Should render button type submit', () => {
    const buttonElement = fixture.nativeElement.querySelector('button');

    expect(buttonElement).toBeTruthy();
    expect(buttonElement.getAttribute('type')).toContain('submit');
  });

  it('Should disabled the when the form group is invalid', () => {
    const buttonElement = fixture.nativeElement.querySelector('button[type="submit"]');
    // initially the form group is valid && disabled not exist
    expect(component.formGroup.valid).toBeTruthy();
    expect(buttonElement.disabled).toBeFalsy();
    // make the form group invalid
    component.formGroup.setErrors({name: true})
    fixture.detectChanges();
    // The button should be disabled
    expect(buttonElement.disabled).toBeTruthy();
  });
});

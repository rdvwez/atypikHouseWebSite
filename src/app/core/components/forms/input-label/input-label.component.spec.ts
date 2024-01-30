import {ComponentFixture, TestBed} from '@angular/core/testing';

import {InputLabelComponent} from './input-label.component';
import {CommonModule} from '@angular/common';

describe('InputLabelComponent', () => {
  let component: InputLabelComponent;
  let fixture: ComponentFixture<InputLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: [
          InputLabelComponent,
          CommonModule
        ]
      })
      .compileComponents();

    fixture = TestBed.createComponent(InputLabelComponent);
    component = fixture.componentInstance;
    // init variable
    component.forInput = 'classInput'
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should render forInput', () => {
    const labelElement = fixture.nativeElement.querySelector('label');

    expect(labelElement).toBeTruthy();
    expect(labelElement.getAttribute('for')).toEqual('classInput');
  })

  it('Should render form-label class', () => {
    const labelElement = fixture.nativeElement.querySelector('label');

    expect(labelElement).toBeTruthy();
    expect(labelElement.classList).toContain('form-label')
  })
});

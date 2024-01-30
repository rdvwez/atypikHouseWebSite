import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ButtonTextComponent} from './button-text.component';
import {CommonModule} from '@angular/common';

describe('ButtonTextComponent', () => {
  let component: ButtonTextComponent;
  let fixture: ComponentFixture<ButtonTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: [ButtonTextComponent, CommonModule]
      })
      .compileComponents();

    fixture = TestBed.createComponent(ButtonTextComponent);
    component = fixture.componentInstance;
    // init variable
    component.customClass = 'customClass'
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should apply custom class to the button', () => {
    const btnElement = fixture.nativeElement.querySelector('button');

    expect(btnElement).toBeTruthy();
    expect(btnElement.classList).toContain('customClass');
  });
  it('Should render button type text', () => {
    const btnElement = fixture.nativeElement.querySelector('button');
    expect(btnElement.getAttribute('type')).toContain('text');
  });
});

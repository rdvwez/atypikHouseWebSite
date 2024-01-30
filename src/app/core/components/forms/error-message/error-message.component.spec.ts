import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ErrorMessageComponent} from './error-message.component';
import {CommonModule} from '@angular/common';

describe('ErrorMessageComponent', () => {
  let component: ErrorMessageComponent;
  let fixture: ComponentFixture<ErrorMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: [ErrorMessageComponent, CommonModule]
      })
      .compileComponents();

    fixture = TestBed.createComponent(ErrorMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Display invalid-feedback class', () => {
    fixture.detectChanges();

    const spanElement = fixture.nativeElement.querySelector('span');
    // set errorForm at false
    expect(spanElement).toBeTruthy();
    expect(spanElement.classList).toContain('invalid-feedback');
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormValueContainerComponent } from './form-value-container.component';

describe('FormValueContainerComponent', () => {
  let component: FormValueContainerComponent;
  let fixture: ComponentFixture<FormValueContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormValueContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormValueContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

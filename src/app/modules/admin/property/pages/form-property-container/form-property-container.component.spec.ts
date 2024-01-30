import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPropertyContainerComponent } from './form-property-container.component';

describe('FormPropertyContainerComponent', () => {
  let component: FormPropertyContainerComponent;
  let fixture: ComponentFixture<FormPropertyContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormPropertyContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormPropertyContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

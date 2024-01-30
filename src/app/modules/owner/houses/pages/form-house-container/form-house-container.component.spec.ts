import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormHouseContainerComponent } from './form-house-container.component';

describe('FormHouseContainerComponent', () => {
  let component: FormHouseContainerComponent;
  let fixture: ComponentFixture<FormHouseContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormHouseContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormHouseContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

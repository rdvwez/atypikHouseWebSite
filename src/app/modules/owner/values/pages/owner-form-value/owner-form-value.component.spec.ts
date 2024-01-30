import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerFormValueComponent } from './owner-form-value.component';

describe('OwnerFormValueComponent', () => {
  let component: OwnerFormValueComponent;
  let fixture: ComponentFixture<OwnerFormValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwnerFormValueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OwnerFormValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

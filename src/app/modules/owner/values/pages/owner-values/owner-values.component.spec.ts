import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerValuesComponent } from './owner-values.component';

describe('OwnerValuesComponent', () => {
  let component: OwnerValuesComponent;
  let fixture: ComponentFixture<OwnerValuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwnerValuesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OwnerValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

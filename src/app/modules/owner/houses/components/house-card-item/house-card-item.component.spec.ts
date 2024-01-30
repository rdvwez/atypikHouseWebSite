import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseCardItemComponent } from './house-card-item.component';

describe('HouseCardItemComponent', () => {
  let component: HouseCardItemComponent;
  let fixture: ComponentFixture<HouseCardItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HouseCardItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HouseCardItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseDetailContainerComponent } from './house-detail-container.component';

describe('HouseDetailContainerComponent', () => {
  let component: HouseDetailContainerComponent;
  let fixture: ComponentFixture<HouseDetailContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HouseDetailContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HouseDetailContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

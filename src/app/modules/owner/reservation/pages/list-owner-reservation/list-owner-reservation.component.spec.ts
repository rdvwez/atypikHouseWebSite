import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOwnerReservationComponent } from './list-owner-reservation.component';

describe('ListOwnerReservationComponent', () => {
  let component: ListOwnerReservationComponent;
  let fixture: ComponentFixture<ListOwnerReservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOwnerReservationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListOwnerReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

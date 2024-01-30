import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListHouseContainerComponent } from './list-house-container.component';

describe('ListHouseContainerComponent', () => {
  let component: ListHouseContainerComponent;
  let fixture: ComponentFixture<ListHouseContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListHouseContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListHouseContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

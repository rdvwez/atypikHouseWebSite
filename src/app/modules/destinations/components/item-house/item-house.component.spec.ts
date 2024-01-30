import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemHouseComponent } from './item-house.component';

describe('ItemHouseComponent', () => {
  let component: ItemHouseComponent;
  let fixture: ComponentFixture<ItemHouseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemHouseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemHouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

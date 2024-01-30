import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemNavigationAdminComponent } from './item-navigation-admin.component';

describe('ItemNavigationAdminComponent', () => {
  let component: ItemNavigationAdminComponent;
  let fixture: ComponentFixture<ItemNavigationAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemNavigationAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemNavigationAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

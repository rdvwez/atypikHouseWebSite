import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCategoryContainerComponent } from './list-category-container.component';

describe('ListCategoryContainerComponent', () => {
  let component: ListCategoryContainerComponent;
  let fixture: ComponentFixture<ListCategoryContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCategoryContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListCategoryContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

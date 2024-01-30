import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCategoryContainerComponent } from './form-category-container.component';

describe('FormCategoryContainerComponent', () => {
  let component: FormCategoryContainerComponent;
  let fixture: ComponentFixture<FormCategoryContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCategoryContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormCategoryContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

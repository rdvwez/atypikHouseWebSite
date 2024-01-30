import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormThematicContainerComponent } from './form-thematic-container.component';

describe('FormThematicContainerComponent', () => {
  let component: FormThematicContainerComponent;
  let fixture: ComponentFixture<FormThematicContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormThematicContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormThematicContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

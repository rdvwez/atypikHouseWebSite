import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPropertyContainerComponent } from './list-property-container.component';

describe('ListPropertyContainerComponent', () => {
  let component: ListPropertyContainerComponent;
  let fixture: ComponentFixture<ListPropertyContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPropertyContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListPropertyContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

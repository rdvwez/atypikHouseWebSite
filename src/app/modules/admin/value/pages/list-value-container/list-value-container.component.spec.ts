import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListValueContainerComponent } from './list-value-container.component';

describe('ListValueContainerComponent', () => {
  let component: ListValueContainerComponent;
  let fixture: ComponentFixture<ListValueContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListValueContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListValueContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

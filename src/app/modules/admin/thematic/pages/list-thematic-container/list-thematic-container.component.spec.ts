import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListThematicContainerComponent } from './list-thematic-container.component';

describe('ListThematicContainerComponent', () => {
  let component: ListThematicContainerComponent;
  let fixture: ComponentFixture<ListThematicContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListThematicContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListThematicContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

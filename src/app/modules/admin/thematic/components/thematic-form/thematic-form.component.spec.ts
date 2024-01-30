import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThematicFormComponent } from './thematic-form.component';

describe('ThematicFormComponent', () => {
  let component: ThematicFormComponent;
  let fixture: ComponentFixture<ThematicFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThematicFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThematicFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

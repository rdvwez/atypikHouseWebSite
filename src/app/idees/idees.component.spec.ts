import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeesComponent } from './idees.component';

describe('IdeesComponent', () => {
  let component: IdeesComponent;
  let fixture: ComponentFixture<IdeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdeesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormlocationComponent } from './formlocation.component';

describe('FormlocationComponent', () => {
  let component: FormlocationComponent;
  let fixture: ComponentFixture<FormlocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormlocationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormlocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

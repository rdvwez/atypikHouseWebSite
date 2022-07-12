import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadiComponent } from './headi.component';

describe('HeadiComponent', () => {
  let component: HeadiComponent;
  let fixture: ComponentFixture<HeadiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadhComponent } from './headh.component';

describe('HeadhComponent', () => {
  let component: HeadhComponent;
  let fixture: ComponentFixture<HeadhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadhComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

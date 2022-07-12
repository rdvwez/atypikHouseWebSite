import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaddComponent } from './headd.component';

describe('HeaddComponent', () => {
  let component: HeaddComponent;
  let fixture: ComponentFixture<HeaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

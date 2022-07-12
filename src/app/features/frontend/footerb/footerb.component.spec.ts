import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterbComponent } from './footerb.component';

describe('FooterbComponent', () => {
  let component: FooterbComponent;
  let fixture: ComponentFixture<FooterbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

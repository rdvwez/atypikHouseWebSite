import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideOwnerComponent } from './aside-owner.component';

describe('AsideOwnerComponent', () => {
  let component: AsideOwnerComponent;
  let fixture: ComponentFixture<AsideOwnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ AsideOwnerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsideOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

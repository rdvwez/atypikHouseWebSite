import {ComponentFixture, TestBed} from '@angular/core/testing';

import {StandardUserLayoutComponent} from './standard-user-layout.component';

describe('OwnerLayoutComponent', () => {
  let component: StandardUserLayoutComponent;
  let fixture: ComponentFixture<StandardUserLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        declarations: [StandardUserLayoutComponent]
      })
      .compileComponents();

    fixture = TestBed.createComponent(StandardUserLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

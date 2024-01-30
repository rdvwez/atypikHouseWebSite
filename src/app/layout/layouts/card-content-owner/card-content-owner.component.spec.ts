import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardContentOwnerComponent } from './card-content-owner.component';

describe('CardContentOwnerComponent', () => {
  let component: CardContentOwnerComponent;
  let fixture: ComponentFixture<CardContentOwnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ CardContentOwnerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardContentOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

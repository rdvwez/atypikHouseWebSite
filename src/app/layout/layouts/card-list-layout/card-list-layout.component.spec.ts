import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CardListLayoutComponent} from './card-list-layout.component';

describe('CardListLayoutComponent', () => {
  let component: CardListLayoutComponent;
  let fixture: ComponentFixture<CardListLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: [CardListLayoutComponent]
      })
      .compileComponents();

    fixture = TestBed.createComponent(CardListLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });
});

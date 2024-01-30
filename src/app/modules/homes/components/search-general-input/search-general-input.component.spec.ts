import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchGeneralInputComponent } from './search-general-input.component';

describe('SearchGeneralInputComponent', () => {
  let component: SearchGeneralInputComponent;
  let fixture: ComponentFixture<SearchGeneralInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ SearchGeneralInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchGeneralInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

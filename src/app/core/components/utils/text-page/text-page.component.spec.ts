import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TextPageComponent} from './text-page.component';
import {CommonModule} from '@angular/common';

describe('TextPageComponent', () => {
  let component: TextPageComponent;
  let fixture: ComponentFixture<TextPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: [TextPageComponent, CommonModule]
      })
      .compileComponents();

    fixture = TestBed.createComponent(TextPageComponent);
    component = fixture.componentInstance;

    // initialize input variable
    component.text = 'Hello';
    component.customClass = 'text-center';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the text ', () => {
    const pElement = fixture.nativeElement.querySelector('p');
    expect(pElement).toBeTruthy();
    expect(pElement.textContent).toContain('Hello');
  })

  it('Should render the custom class', () => {
    const pElement = fixture.nativeElement.querySelector('p');
    expect(pElement).toBeTruthy();
    expect(pElement.classList).toContain('text-center');
  })
});

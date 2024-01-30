import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TitleComponent} from './title.component';
import {CommonModule} from '@angular/common';

describe('TitleComponent', () => {
  let component: TitleComponent;
  let fixture: ComponentFixture<TitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: [TitleComponent, CommonModule]
      })
      .compileComponents();

    fixture = TestBed.createComponent(TitleComponent);
    component = fixture.componentInstance;
    // input value input
    component.title = 'Hello';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component.title).toEqual('Hello');
    expect(component).toBeTruthy();
  });

  it('render the right text', () => {
    const h1Element = fixture.nativeElement.querySelector('h1');
    expect(h1Element).toBeTruthy();
    expect(h1Element.textContent).toContain('Hello');
  })
  it('h1 will contain h2 class', () => {
    const h1Element = fixture.nativeElement.querySelector('h1');
    expect(h1Element).toBeTruthy();
    expect(h1Element.classList).toContain('h2');
  })
});

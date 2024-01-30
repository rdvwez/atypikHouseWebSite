import {ComponentFixture, TestBed} from '@angular/core/testing';

import {LinkComponent} from './link.component';
import {RouterModule} from '@angular/router';

describe('LinkComponent', () => {
  let component: LinkComponent;
  let fixture: ComponentFixture<LinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: [LinkComponent, RouterModule.forRoot([])]
      })
      .compileComponents();

    fixture = TestBed.createComponent(LinkComponent);
    component = fixture.componentInstance;

    component.urlLink = '/routes';
    component.customClass = 'data';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should display url routes link', () => {
    const aElement = fixture.nativeElement.querySelector('a');
    expect(aElement).toBeTruthy();
    expect(aElement.getAttribute('ng-reflect-router-link')).toBe('/routes');
  });

  it('Should contain link class', () => {
    const aElement = fixture.nativeElement.querySelector('a');
    expect(aElement.classList).toContain('data');
  });
});

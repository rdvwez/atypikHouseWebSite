import {ComponentFixture, TestBed} from '@angular/core/testing';

import {LoadComponent} from './load.component';
import {SharedModule} from '../../../../shared/shared.module';

describe('LoadComponent', () => {
  let component: LoadComponent;
  let fixture: ComponentFixture<LoadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: [LoadComponent, SharedModule]
      })
      .compileComponents();

    fixture = TestBed.createComponent(LoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should render span element', () => {
    const spanElement = fixture.nativeElement.querySelector('span');

    expect(spanElement).toBeTruthy();
    expect(spanElement.classList).toContain('spinner-border');
    expect(spanElement.classList).toContain('spinner-border-sm');
    expect(spanElement.classList).toContain('spinner-border-sm');
  });

  it('Display role attribute to status', () => {
    const spanElement = fixture.nativeElement.querySelector('span');

    expect(spanElement.role).toContain('status');
  });
});

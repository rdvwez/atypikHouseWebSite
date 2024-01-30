import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import {GENERAL_DATA_TEXT_CONST} from '../../../shared/constant/data-text.constant';
import {Observable, Subject, takeUntil} from 'rxjs';
import {NavigationInterface} from '../admin-layout/shrared/model/navigation.interface';
import {select, Store} from '@ngrx/store';
import {NavigationDashboardState, selectAdminMenuActive} from '../admin-layout/shrared/store';
import {CardHeaderComponent} from './components/card-header/card-header.component';
import {CardFooterComponent} from './components/card-footer/card-footer.component';
import {CardHeaderActionEnum} from './card-header-action.enum';

@Component({
  selector: 'app-card-list-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    CardHeaderComponent,
    CardFooterComponent
  ],
  templateUrl: './card-list-layout.component.html',
  styleUrls: ['./card-list-layout.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardListLayoutComponent implements OnInit, OnDestroy {
  // constant
  generalConst = GENERAL_DATA_TEXT_CONST;
  // Streams
  activeNavigation$: Observable<NavigationInterface | undefined> = this._store.pipe(select(selectAdminMenuActive));
  activeNavigation: NavigationInterface | undefined;
  destroyed$: Subject<void> = new Subject<void>();

  constructor(
    private _store: Store<NavigationDashboardState>,
    private _router: Router
  ) {
  }

  ngOnInit(): void {
    this.activeNavigation$.pipe(
      takeUntil(this.destroyed$)
    ).subscribe((result: NavigationInterface | undefined) => {
      if (result) {
        this.activeNavigation = result;
      }
    })
  }

  /**
   * Event Header
   * @param event
   */
  actionHeader(event: CardHeaderActionEnum) {
    switch (event) {
      case CardHeaderActionEnum.ADD_PAGE:
        this._router.navigate([this.activeNavigation?.urlAdd]);
        return;
    }
  }

  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}

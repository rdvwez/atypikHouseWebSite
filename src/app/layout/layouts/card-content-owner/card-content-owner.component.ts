import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {NavigationInterface} from '../admin-layout/shrared/model/navigation.interface';
import {Observable, Subject, takeUntil} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {NavigationDashboardState, selectAdminMenuActive} from '../admin-layout/shrared/store';
import {Router, RouterOutlet} from '@angular/router';
import {GENERAL_DATA_TEXT_CONST} from '../../../shared/constant/data-text.constant';

@Component({
  selector: 'app-card-content-owner',
  standalone: true,
  imports: [
    RouterOutlet
  ],
  templateUrl: './card-content-owner.component.html',
  styleUrls: ['./card-content-owner.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardContentOwnerComponent implements OnInit {

  generalConst = GENERAL_DATA_TEXT_CONST;
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

  add() {
    this._router.navigate([this.activeNavigation?.urlAdd]);
  }
}

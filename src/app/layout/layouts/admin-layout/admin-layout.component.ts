import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {ThemeService} from '../../../core/service/theme/theme.service';
import {select, Store} from '@ngrx/store';
import {Observable, Subject, takeUntil} from 'rxjs';
import {AuthActions, selectUserConnected} from '../../../modules/auth/shared/store';

import {selectAdminMenu, selectAdminMenuActive} from './shrared/store';
import {UserInterface} from '../../../modules/admin/users/shared/model/user.interface';
import {NavigationInterface} from './shrared/model/navigation.interface';
import {AdminLayoutEnum} from './admin-layout.enum';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AdminLayoutComponent implements OnInit, OnDestroy {

  profile$: Observable<UserInterface | undefined> = this._store.pipe(select(selectUserConnected));
  menuAdmin$: Observable<NavigationInterface[]> = this._store.pipe(select(selectAdminMenu));
  menuActive$: Observable<NavigationInterface | undefined> = this._store.pipe(select(selectAdminMenuActive));

  profile: UserInterface;
  destroyed$: Subject<void> = new Subject<void>();

  constructor(
    private theme: ThemeService,
    private _store: Store,
    private _router: Router
  ) {
  }

  topBarAction(event: any): void {
    switch (event.action) {
      case AdminLayoutEnum.LOGOUT:
        this._store.dispatch(AuthActions.authLogout());
        break;

      case AdminLayoutEnum.PROFILE:
        this._router.navigate(['/admin/account'])
        break;
    }
  }

  ngOnInit(): void {
    this.theme.loadTheme('theme2');
    this.getProfile();
  }

  getProfile() {
    this.profile$.pipe(
      takeUntil(this.destroyed$)
    ).subscribe((result: UserInterface | undefined) => {
      if (result) {
        this.profile = result;
      }
    })
  }

  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}

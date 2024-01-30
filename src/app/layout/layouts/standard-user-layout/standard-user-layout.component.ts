import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import {TopBarComponent} from '../../common/top-bar/top-bar.component';
import {FooterComponent} from '../../common/footer/footer.component';
import {AsideOwnerComponent} from './components/aside-owner/aside-owner.component';
import {HeaderTitleComponent} from './components/header-title/header-title.component';
import {select, Store} from '@ngrx/store';
import {Observable, Subject, takeUntil} from 'rxjs';
import {NavigationInterface} from '../admin-layout/shrared/model/navigation.interface';
import {NavigationActions, selectAdminMenu, selectAdminMenuActive} from '../admin-layout/shrared/store';
import {UserInterface} from '../../../modules/admin/users/shared/model/user.interface';
import {AuthActions, selectUserConnected} from '../../../modules/auth/shared/store';
import {AsyncPipe} from '@angular/common';
import {StandardUserLayoutEnum} from './standard-user-layout.enum';

@Component({
  selector: 'app-standard-user-layout',
  templateUrl: './standard-user-layout.component.html',
  standalone: true,
  imports: [
    RouterOutlet,
    TopBarComponent,
    FooterComponent,
    AsideOwnerComponent,
    HeaderTitleComponent,
    AsyncPipe
  ],
  styleUrls: ['./standard-user-layout.component.css']
})
export class StandardUserLayoutComponent implements OnInit, OnDestroy {

  navigations$: Observable<NavigationInterface[]> = this._store.pipe(select(selectAdminMenu));
  activeNavigation$: Observable<NavigationInterface | undefined> = this._store.pipe(select(selectAdminMenuActive));

  userConnected$: Observable<UserInterface | undefined> = this._store.pipe(select(selectUserConnected));
  destroyed$: Subject<void> = new Subject<void>();

  titlePage!: string;

  constructor(
    private _store: Store,
    private _router: Router
  ) {
  }

  ngOnInit(): void {
    this.activeNavigation$.pipe(
      takeUntil(this.destroyed$)
    ).subscribe((result: NavigationInterface | undefined) => {
      if (result) {
        this.titlePage = result.title;
      }
    })
  }

  setLink(event: NavigationInterface): void {
    this._store.dispatch(NavigationActions.setNavigation({item: event}))
  }

  setAction(event: StandardUserLayoutEnum) {
    switch (event) {
      case StandardUserLayoutEnum.GOTO_WEB_SITE:
        this._router.navigate(['/']);
        return;
      case StandardUserLayoutEnum.LOGOUT_USER:
        // Logout user
        this._store.dispatch(AuthActions.authLogout());
        return;
    }
  }

  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}

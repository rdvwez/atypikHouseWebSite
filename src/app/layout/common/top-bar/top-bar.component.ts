import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {NavigationComponent} from '../navigation/navigation.component';
import {Observable, Subject, takeUntil} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {navigations, selectMenuNavigation, setNavigation} from '../navigation/store';
import {NavItem} from '../navigation/nav-item';
import {selectIsAuthenticated, selectUserConnected} from '../../../modules/auth/shared/store';
import {AsyncPipe, NgFor} from '@angular/common';
import {LayoutCustomerNavigationEnum} from '../layout-customer-navigation.enum';
import {Router} from '@angular/router';
import {UserInterface} from '../../../modules/admin/users/shared/model/user.interface';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [
    NgFor,
    AsyncPipe,
    NavigationComponent
  ],
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopBarComponent implements OnInit, OnDestroy {

  navigations$: Observable<NavItem[]> = this._store.pipe(select(selectMenuNavigation));
  selectIsAuthenticated$: Observable<boolean> = this._store.pipe(select(selectIsAuthenticated));
  private destroyed$: Subject<void> = new Subject<void>();
  isAuthenticated: boolean = false;

  userConnected$: Observable<UserInterface | undefined> = this._store.pipe(select(selectUserConnected));

  constructor(private _store: Store, private _router: Router) {
  }

  ngOnInit(): void {
    this.selectIsAuthenticated$.pipe(
      takeUntil(this.destroyed$)
    ).subscribe((result: boolean) => {
      this.isAuthenticated = result;
      // menus navigations
      this.menus();
    });
  }

  menus(): void {
    this._store.dispatch(navigations({isConnected: this.isAuthenticated}));
  }

  navigationAction(event: { data: NavItem | undefined, action: LayoutCustomerNavigationEnum }) {
    switch (event.action) {
      case LayoutCustomerNavigationEnum.GOTO_ADMIN:
        // switch the right admin
        this.userConnected$.pipe(
          takeUntil(this.destroyed$)
        ).subscribe((user) => {
          if (user) {
            if (user.is_admin) {
              this._router.navigate(['/admin/home']);
            } else if (user.is_owner) {
              this._router.navigate(['/owner/house']);
            } else if (user.is_customer) {
              this._router.navigate(['/client/reservations']);
            }
          }
        })
        break;
      case LayoutCustomerNavigationEnum.UPDATE_LINK:
        if (event.data) {
          this._store.dispatch(setNavigation({item: event.data}));
        }
        break;
    }
  }

  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}

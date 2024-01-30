import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {AsyncPipe, NgFor} from '@angular/common';
import {ItemNavigationAdminComponent} from '../item-navigation-admin/item-navigation-admin.component';
import {NavigationActions, NavigationDashboardState} from '../../shrared/store';
import {Store} from '@ngrx/store';
import {NavigationInterface} from '../../shrared/model/navigation.interface';

@Component({
  selector: 'aside-admin',
  standalone: true,
  imports: [
    NgFor,
    AsyncPipe,
    ItemNavigationAdminComponent
  ],
  templateUrl: './aside-admin.component.html',
  styleUrls: ['./aside-admin.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AsideAdminComponent implements OnInit {

  @Input() menuAdmin: NavigationInterface[] | null = [];

  constructor(private _store: Store<NavigationDashboardState>) {
  }

  ngOnInit(): void {
  }

  setLink(item: NavigationInterface): void {
    this._store.dispatch(NavigationActions.setNavigation({item}));
  }

  /**
   * track by function for NgFor loop
   * @param
   */
  trackByFn(index: number, menuItem: any): any {
    return menuItem.id || index;
  }
}

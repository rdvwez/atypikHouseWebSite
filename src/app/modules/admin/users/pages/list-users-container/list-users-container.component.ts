import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {selectUsers, UsersAction, UserState} from '../../shared/store';
import {Observable} from 'rxjs';
import {UserInterface} from '../../shared/model/user.interface';
import {ColumnTableInterface} from '../../../../../core/components/data-table/column-table.interface';
import {DataActionEmitInterface} from '../../../../../core/components/data-table/data-action-emit.interface';
import {ActionTableEnum} from '../../../../../core/components/data-table/action-table.enum';
import {PropertyAction} from '../../../property/shared/store';
import {Router} from '@angular/router';
import {selectLoading} from '../../../../../core/components/utils/load/store';

@Component({
  selector: 'app-list-users-container',
  templateUrl: './list-users-container.component.html',
  styleUrls: ['./list-users-container.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListUsersContainerComponent implements OnInit {
  // streams
  $users: Observable<ReadonlyArray<UserInterface>> = this._store.pipe(select(selectUsers));
  loading$: Observable<boolean> = this._store.pipe(select(selectLoading));
  headers: ColumnTableInterface<UserInterface>[] = [
    {headerName: 'Prénom', fieldName: 'firstname', isModelProperty: true},
    {headerName: 'Nom', fieldName: 'name', isModelProperty: true},
    {headerName: 'Email', fieldName: 'email', isModelProperty: true},
    {headerName: 'Owner', fieldName: 'is_owner', isModelProperty: true},
    {headerName: 'Admin', fieldName: 'is_admin', isModelProperty: true},
    {headerName: 'Client', fieldName: 'is_customer', isModelProperty: true}
  ];

  constructor(private _store: Store<UserState>, private _router: Router) {
  }

  ngOnInit(): void {
    this._store.dispatch(UsersAction.list());
  }

  /**
   * Select item users && make action DELETE && UPDATE
   * @param event
   */
  onSelectElement(event: DataActionEmitInterface<UserInterface>): void {
    switch (event.action) {
      case ActionTableEnum.DELETE:
        if (event.data.id) {
          this._store.dispatch(PropertyAction.deleteProperty({id: event.data.id}))
        }
        return;
      case ActionTableEnum.EDIT:
        this._router.navigate([`/admin/user/form/${event.data.id}`,]);
        return;
    }
  }
}

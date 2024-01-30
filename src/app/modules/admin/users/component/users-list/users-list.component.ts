import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ColumnTableInterface} from '../../../../../core/components/data-table/column-table.interface';
import {UserInterface} from '../../shared/model/user.interface';
import {DataActionEmitInterface} from '../../../../../core/components/data-table/data-action-emit.interface';
import {GENERAL_DATA_TEXT_CONST} from '../../../../../shared/constant/data-text.constant';
import {USERS_CONST} from '../../shared/constant/data.constant';
import {Router} from '@angular/router';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersListComponent implements OnInit {

  @Input() headers: ColumnTableInterface<UserInterface>[];
  @Input() users: ReadonlyArray<UserInterface> | null;
  @Output() user: EventEmitter<DataActionEmitInterface<UserInterface>> = new EventEmitter<DataActionEmitInterface<UserInterface>>();
  @Input() loading: boolean | null = false;

  // Constant
  generalConst = GENERAL_DATA_TEXT_CONST;
  dataConst = USERS_CONST;

  constructor(private _router: Router) {
  }

  ngOnInit(): void {
  }

  selectElement(data: any) {
    // emit actions from
    this.user.emit({
      data: data.element,
      action: data.action
    });
  }

  add() {
    this._router.navigate(['/admin/user/form']);
  }
}

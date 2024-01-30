import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';
import {ADMIN_MENU_NAVIGATION_ADMIN_CONST} from '../../shrared/constant/admin-layout.const';
import {RouterModule} from '@angular/router';
import {ToggleMenuDirective} from '../toggle-menu.directive';
import {UserInterface} from '../../../../../modules/admin/users/shared/model/user.interface';
import {AdminLayoutEnum} from '../../admin-layout.enum';

@Component({
  selector: 'app-topbar-admin',
  templateUrl: './topbar-admin.component.html',
  styleUrls: ['./topbar-admin.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    NgbDropdownModule,
    RouterModule,
    ToggleMenuDirective
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopbarAdminComponent implements OnInit {

  @Input() profile: UserInterface | undefined;
  dataConst = ADMIN_MENU_NAVIGATION_ADMIN_CONST;
  @Output() topBarAction = new EventEmitter<{ action: AdminLayoutEnum }>();
  layoutEnum = AdminLayoutEnum;

  constructor() {
  }

  ngOnInit(): void {
  }

  nameInitial(first?: string, last?: string): string {
    if (first && last) {
      return first.charAt(0).toUpperCase() + last.charAt(0).toUpperCase()
    }
    return '';
  }

  emitAction(action: AdminLayoutEnum): void {
    this.topBarAction.emit({action});
  }

}

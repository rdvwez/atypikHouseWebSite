import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UserInterface} from '../../../../../modules/admin/users/shared/model/user.interface';
import {NavigationInterface} from '../../../admin-layout/shrared/model/navigation.interface';
import {RouterModule} from '@angular/router';
import {NgClass, NgFor} from '@angular/common';

@Component({
  selector: 'app-aside-owner',
  standalone: true,
  imports: [
    NgFor,
    NgClass,
    RouterModule
  ],
  templateUrl: './aside-owner.component.html',
  styleUrls: ['./aside-owner.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AsideOwnerComponent implements OnInit {

  @Input() user: UserInterface | undefined | null;
  @Input() navigations: NavigationInterface[] | null;
  @Output() itemNavigation = new EventEmitter<NavigationInterface>();

  constructor() {
  }

  ngOnInit(): void {
  }

  setLink(item: NavigationInterface) {
    this.itemNavigation.emit(item);
  }

}

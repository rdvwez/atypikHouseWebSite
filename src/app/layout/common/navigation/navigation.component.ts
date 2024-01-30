import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {RouterModule} from '@angular/router';
import {NavItem} from './nav-item';
import {NgIf} from '@angular/common';
import {LayoutCustomerNavigationEnum} from '../layout-customer-navigation.enum';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [NgIf, RouterModule],
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationComponent implements OnInit {

  @Input() navItem: NavItem;
  // navigation actions
  @Output() navigation = new EventEmitter<{ data: NavItem | undefined, action: LayoutCustomerNavigationEnum }>()
  layoutCustomerNavigationEnum = LayoutCustomerNavigationEnum;

  constructor() {
  }

  ngOnInit(): void {
  }

  isActive() {
    return this.navItem.isActive ? 'nav-link active' : 'nav-link'
  }

  emitAction(action: LayoutCustomerNavigationEnum, data: NavItem | undefined = undefined) {
    this.navigation.emit({
      data,
      action
    })
  }
}

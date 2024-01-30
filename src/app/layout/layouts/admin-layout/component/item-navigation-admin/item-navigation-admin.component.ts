import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NavigationInterface} from '../../shrared/model/navigation.interface';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'item-navigation-admin',
  templateUrl: './item-navigation-admin.component.html',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule
  ],
  styleUrls: ['./item-navigation-admin.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemNavigationAdminComponent implements OnInit {

  @Input() item: NavigationInterface;
  @Output() itemClick: EventEmitter<NavigationInterface> = new EventEmitter<NavigationInterface>();

  constructor() {
  }

  ngOnInit(): void {
  }

  emitItem() {
    this.itemClick.emit(this.item);
  }
}

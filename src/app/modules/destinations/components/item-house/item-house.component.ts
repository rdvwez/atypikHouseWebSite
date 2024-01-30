import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {HouseInterface} from '../../../admin/house/shared/model/house.interface';
import {RouterModule} from '@angular/router';
import {environment} from '../../../../../environments/environment';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-item-house',
  templateUrl: './item-house.component.html',
  styleUrls: ['./item-house.component.css'],
  standalone: true,
  imports: [
    RouterModule,
    CommonModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemHouseComponent implements OnInit {

  @Input() house: HouseInterface;
  environment = environment

  constructor() {
  }

  ngOnInit(): void {
  }

}

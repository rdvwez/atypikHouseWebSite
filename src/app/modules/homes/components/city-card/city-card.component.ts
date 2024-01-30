import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {CityInterface} from '../../../admin/house/shared/model/city.interface';

@Component({
  selector: 'app-city-card',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './city-card.component.html',
  styleUrls: ['./city-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CityCardComponent implements OnInit {

  @Input() city: CityInterface;

  ngOnInit(): void {
  }

}

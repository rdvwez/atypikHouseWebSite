import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {NavigationInterface} from '../../shrared/model/navigation.interface';

@Component({
  selector: 'app-title-page',
  standalone: true,
  imports: [],
  templateUrl: './title-page.component.html',
  styleUrls: ['./title-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TitlePageComponent implements OnInit {

  @Input() activeMenu: NavigationInterface | undefined | null;

  constructor() {
  }

  ngOnInit(): void {
  }

}

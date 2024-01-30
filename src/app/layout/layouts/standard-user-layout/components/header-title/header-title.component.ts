import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {GENERAL_DATA_TEXT_CONST} from '../../../../../shared/constant/data-text.constant';
import {StandardUserLayoutEnum} from '../../standard-user-layout.enum';

@Component({
  selector: 'app-header-title',
  standalone: true,
  templateUrl: './header-title.component.html',
  styleUrls: ['./header-title.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderTitleComponent implements OnInit {

  @Input() titlePage: string;
  @Output() action = new EventEmitter<StandardUserLayoutEnum>();

  generalConst = GENERAL_DATA_TEXT_CONST;
  ownerLayoutEnum = StandardUserLayoutEnum;

  constructor() {
  }

  ngOnInit(): void {
  }

  actionBtnLayout(action: StandardUserLayoutEnum): void {
    this.action.emit(action);
  }
}

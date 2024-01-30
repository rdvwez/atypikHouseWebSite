import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {GENERAL_DATA_TEXT_CONST} from '../../../../../shared/constant/data-text.constant';
import {CardHeaderActionEnum} from '../../card-header-action.enum';

@Component({
  selector: 'app-card-header',
  standalone: true,
  templateUrl: './card-header.component.html',
  styleUrls: ['./card-header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardHeaderComponent implements OnInit {

  @Input() titleList: string | undefined;
  generalConst = GENERAL_DATA_TEXT_CONST;
  // Add record
  @Output() actionCardHeader = new EventEmitter<CardHeaderActionEnum>();

  constructor() {
  }

  ngOnInit(): void {
  }

  add() {
    this.actionCardHeader.emit(CardHeaderActionEnum.ADD_PAGE);
  }
}

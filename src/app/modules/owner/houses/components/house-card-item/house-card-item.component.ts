import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {HouseInterface} from '../../../../admin/house/shared/model/house.interface';
import {DataActionEmitInterface} from '../../../../../core/components/data-table/data-action-emit.interface';
import {ActionTableEnum} from '../../../../../core/components/data-table/action-table.enum';
import {environment} from '../../../../../../environments/environment';

@Component({
  selector: 'app-house-card-item',
  templateUrl: './house-card-item.component.html',
  styleUrls: ['./house-card-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HouseCardItemComponent implements OnInit {

  @Input() house: HouseInterface;
  @Output() action = new EventEmitter<DataActionEmitInterface<HouseInterface>>();
  actionsEnum = ActionTableEnum;
  environment = environment

  ngOnInit(): void {
  }

  selectElement(actionType: ActionTableEnum) {
    this.action.emit({
      data: this.house,
      action: actionType
    })
  }

  getUrlImage(path: string): string {
    if (path) {
      return environment.hostImage + path
    }
    return ''
  }
}

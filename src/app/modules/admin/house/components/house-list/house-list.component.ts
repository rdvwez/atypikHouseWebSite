import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ColumnTableInterface} from '../../../../../core/components/data-table/column-table.interface';
import {DataActionEmitInterface} from '../../../../../core/components/data-table/data-action-emit.interface';
import {HouseInterface} from '../../shared/model/house.interface';
import {Router} from '@angular/router';
import {HOUSE_CONST} from '../../shared/constant/data.constant';
import {GENERAL_DATA_TEXT_CONST} from '../../../../../shared/constant/data-text.constant';

@Component({
  selector: 'app-house-list',
  templateUrl: './house-list.component.html',
  styleUrls: ['./house-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HouseListComponent implements OnInit {

  @Input() headers: ColumnTableInterface<HouseInterface>[];
  @Input() houses: ReadonlyArray<HouseInterface> | null = [];
  @Output() house = new EventEmitter<DataActionEmitInterface<HouseInterface>>();
  @Input() loading: boolean | null;
  @Input() total: number;
  @Input() page = 1;

  @Output() onChangePage = new EventEmitter<number>();
  // Constant
  dataConst = HOUSE_CONST;
  generalConst = GENERAL_DATA_TEXT_CONST;

  constructor(private _router: Router) {
  }

  ngOnInit(): void {

  }

  selectElement(data: any) {
    // emit actions from
    this.house.emit({
      data: data.element,
      action: data.action
    });
  }

  add() {
    this._router.navigate(['/admin/house/form']);
  }

  getPage(event: number) {
    this.onChangePage.emit(event);
  }
}

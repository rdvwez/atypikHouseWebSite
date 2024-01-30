import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ColumnTableInterface} from '../../../../../core/components/data-table/column-table.interface';
import {DataActionEmitInterface} from '../../../../../core/components/data-table/data-action-emit.interface';
import {ValueInterface} from '../../shared/model/value.interface';
import {ActionTableEnum} from '../../../../../core/components/data-table/action-table.enum';

@Component({
  selector: 'app-value-list',
  templateUrl: './value-list.component.html',
  styleUrls: ['./value-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ValueListComponent implements OnInit {

  @Input() headers: ColumnTableInterface<ValueInterface>[];
  @Input() values: ReadonlyArray<ValueInterface> | null = [];
  @Output() value = new EventEmitter<DataActionEmitInterface<ValueInterface>>();
  @Input() loading: boolean | null = false;

  ngOnInit(): void {
  }

  selectElement(data: any) {
    // emit actions from
    this.value.emit({
      data: data.element,
      action: data.action
    });
  }

  /**
   * filter value on the string
   * @param event
   */
  onFilter(event: string) {
    this.selectElement({
      element: {libelle: event},
      action: ActionTableEnum.SEARCH
    });
  }
}

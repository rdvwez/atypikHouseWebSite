import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ColumnTableInterface, TableActionEmitInterface} from './column-table.interface';
import {ActionTableEnum} from './action-table.enum';

@Component({
  selector: 'app-data-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DataTableComponent<T> implements OnInit {

  @Input() COLUMNS: ColumnTableInterface<T>[];
  @Input() haveActions: boolean = false;
  @Input() DATA: ReadonlyArray<T> | null = [];

  headers: string [] = [];
  actionsEnum = ActionTableEnum;
  @Output() selectRow = new EventEmitter<TableActionEmitInterface<T>>()

  constructor() {
  }

  ngOnInit(): void {
    this.headers = this.COLUMNS.map((elt: ColumnTableInterface<T>) => elt.headerName);
    if (this.haveActions) this.headers.push("actions");
    this.headers.unshift('selected');
  }


  getFieldNameByName(headerName: string): any {
    const elt = this.COLUMNS.find((elt: ColumnTableInterface<T>) => elt.headerName === headerName && elt.isModelProperty);
    return elt ? elt.fieldName : '';
  }

  /**
   * display data between headerName && data
   * @param h
   * @param data
   */
  displayData(h: string, data: any): string {
    let element = this.COLUMNS.find((elt: ColumnTableInterface<T>) => elt.headerName === h && elt.isModelProperty);
    if (!element?.fieldName) return '';
    return data[element?.fieldName];
  }

  columnTypeBool(h: string, data: any): boolean {
    let element = this.COLUMNS.find((elt: ColumnTableInterface<T>) => elt.headerName === h && elt.isModelProperty)
    if (!element?.fieldName) return false;
    return typeof data[element?.fieldName] == 'boolean';
  }

  /**
   * Emit event from delete && edit btn
   * @param elt
   * @param action
   */
  selectElement(elt: T, action: ActionTableEnum) {
    this.selectRow.emit({element: elt, action});
  }
}

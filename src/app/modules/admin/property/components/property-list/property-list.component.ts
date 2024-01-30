import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ColumnTableInterface} from '../../../../../core/components/data-table/column-table.interface';
import {GENERAL_DATA_TEXT_CONST} from '../../../../../shared/constant/data-text.constant';
import {PropertyInterface} from '../../shared/model/property.interface';
import {Router} from '@angular/router';
import {PROPERTY_CONST} from '../../shared/constant/property.constant';
import {DataActionEmitInterface} from '../../../../../core/components/data-table/data-action-emit.interface';
import {ActionTableEnum} from '../../../../../core/components/data-table/action-table.enum';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PropertyListComponent implements OnInit {
  @Input() headers: ColumnTableInterface<PropertyInterface>[];
  @Input() properties: ReadonlyArray<PropertyInterface> | null = [];
  @Output() property = new EventEmitter<DataActionEmitInterface<PropertyInterface>>();

  // Constant
  generalConst = GENERAL_DATA_TEXT_CONST;
  dataConst = PROPERTY_CONST;

  constructor(private _router: Router) {
  }

  ngOnInit(): void {
  }

  selectElement(data: any) {
    // emit actions from
    this.property.emit({
      data: data.element,
      action: data.action
    });
  }

  add() {
    this._router.navigate(['/admin/property/form']);
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

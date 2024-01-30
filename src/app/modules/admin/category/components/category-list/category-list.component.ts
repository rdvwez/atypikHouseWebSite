import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DataCategoryConstant} from '../../shared/constant/data.constant';
import {ColumnTableInterface} from '../../../../../core/components/data-table/column-table.interface';
import {CategoryInterface} from '../../shared/models/category.interface';
import {GENERAL_DATA_TEXT_CONST} from '../../../../../shared/constant/data-text.constant';
import {DataActionEmitInterface} from '../../../../../core/components/data-table/data-action-emit.interface';
import {ActionTableEnum} from '../../../../../core/components/data-table/action-table.enum';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoryListComponent implements OnInit {

  @Input() headers: ColumnTableInterface<CategoryInterface>[];
  @Input() categories: ReadonlyArray<CategoryInterface> | null = [];
  @Output() category = new EventEmitter<DataActionEmitInterface<CategoryInterface>>();
  @Input() loading: boolean | null = false;

  dataConst = DataCategoryConstant;
  generalConst = GENERAL_DATA_TEXT_CONST;

  ngOnInit(): void {
  }

  selectElement(data: any) {
    // emit actions from
    this.category.emit({
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

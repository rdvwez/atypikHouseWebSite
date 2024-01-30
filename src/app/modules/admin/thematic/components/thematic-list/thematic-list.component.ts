import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ColumnTableInterface} from '../../../../../core/components/data-table/column-table.interface';
import {ThematicInterface} from '../../shared/model/thematic.interface';
import {Router} from '@angular/router';
import {GENERAL_DATA_TEXT_CONST} from '../../../../../shared/constant/data-text.constant';
import {THEMATIC_CONST} from '../../shared/constant/thematic.constant';
import {DataActionEmitInterface} from '../../../../../core/components/data-table/data-action-emit.interface';

@Component({
  selector: 'app-thematic-list',
  templateUrl: './thematic-list.component.html',
  styleUrls: ['./thematic-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThematicListComponent implements OnInit {

  @Input() headers: ColumnTableInterface<ThematicInterface>[];
  @Input() thematics: ReadonlyArray<ThematicInterface> | null = [];
  @Output() thematic = new EventEmitter<DataActionEmitInterface<ThematicInterface>>();
  @Input() loading: boolean | null;
  // Constant
  generalConst = GENERAL_DATA_TEXT_CONST;
  dataConst = THEMATIC_CONST;

  constructor(private _router: Router) {
  }

  ngOnInit(): void {
  }

  selectElement(data: any) {
    // emit actions from
    this.thematic.emit({
      data: data.element,
      action: data.action
    });
  }

  add() {
    this._router.navigate(['/admin/thematic/form']);
  }
}

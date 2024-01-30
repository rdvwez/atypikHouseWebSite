import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {ThematicAction} from '../../shared/store/thematic.action';
import {selectErrorThematic, selectThematics, ThematicState} from '../../shared/store';
import {Observable, Subject} from 'rxjs';
import {ThematicInterface} from '../../shared/model/thematic.interface';
import {ColumnTableInterface} from '../../../../../core/components/data-table/column-table.interface';
import {TypeAlert} from '../../../../../core/components/alert/alert.component';
import {ActionTableEnum} from '../../../../../core/components/data-table/action-table.enum';
import {Router} from '@angular/router';
import {DataActionEmitInterface} from '../../../../../core/components/data-table/data-action-emit.interface';
import {selectLoading} from '../../../../../core/components/utils/load/store';

@Component({
  selector: 'app-list-thematic-container',
  templateUrl: './list-thematic-container.component.html',
  styleUrls: ['./list-thematic-container.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListThematicContainerComponent implements OnInit {

  thematics$: Observable<ReadonlyArray<ThematicInterface>> = this._store.pipe(select(selectThematics));
  loading$: Observable<boolean> = this._store.pipe(select(selectLoading));

  headers: ColumnTableInterface<ThematicInterface>[] = [
    {headerName: 'Thematic', fieldName: 'libelle', isModelProperty: true},
    {headerName: 'Visible', fieldName: 'show', isModelProperty: true}
  ];

  alert: TypeAlert;
  errorMessage$: Observable<string> = this._store.pipe(select(selectErrorThematic));
  destroyed$: Subject<void> = new Subject<any>();
  messageResponse: string = '';

  constructor(private _store: Store<ThematicState>, private _router: Router) {
  }

  ngOnInit(): void {
    this._store.dispatch(ThematicAction.listThematic());
  }

  /**
   * Select item thematic && make action DELETE && UPDATE
   * @param event
   */
  selectThematic(event: DataActionEmitInterface<ThematicInterface>): void {
    switch (event.action) {
      case ActionTableEnum.DELETE:
        if (event.data.id) {
          this._store.dispatch(ThematicAction.deleteThematic({id: event.data.id}))
        }
        return;
      case ActionTableEnum.EDIT:
        this._router.navigate([`/admin/thematic/form/${event.data.id}`,]);
        return;
    }
  }
}

import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {ValueAction, ValueState} from '../../shared/store';
import {combineLatestWith, map, Observable} from 'rxjs';
import {ValueInterface} from '../../shared/model/value.interface';
import {selectFilter, selectValues} from '../../shared/store/value.selector';
import {ColumnTableInterface} from '../../../../../core/components/data-table/column-table.interface';
import {DataActionEmitInterface} from '../../../../../core/components/data-table/data-action-emit.interface';
import {ActionTableEnum} from '../../../../../core/components/data-table/action-table.enum';
import {Router} from '@angular/router';
import {selectLoading} from '../../../../../core/components/utils/load/store';

@Component({
  selector: 'app-list-value-container',
  templateUrl: './list-value-container.component.html',
  styleUrls: ['./list-value-container.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListValueContainerComponent implements OnInit {
  // Streams data
  values$: Observable<ReadonlyArray<ValueInterface>> = this._store.pipe(select(selectValues));
  filter$: Observable<string | undefined> = this._store.pipe(select(selectFilter));
  loading$: Observable<boolean> = this._store.pipe(select(selectLoading));

  headers: ColumnTableInterface<ValueInterface>[] = [
    {headerName: 'Valeur', fieldName: 'libelle', isModelProperty: true},
    {headerName: 'Propriete', fieldName: 'property_object', isModelProperty: true}
  ];

  constructor(
    private _store: Store<ValueState>,
    private _router: Router
  ) {
  }

  ngOnInit(): void {
    this._store.dispatch(ValueAction.listValue());
  }

  /**
   * Select item value && make action DELETE && UPDATE
   * @param event
   */
  onSelectElement(event: DataActionEmitInterface<ValueInterface>): void {
    switch (event.action) {
      case ActionTableEnum.DELETE:
        if (event.data.id) {
          this._store.dispatch(ValueAction.deleteValue({id: event.data.id}))
        }
        return;
      case ActionTableEnum.EDIT:
        this._router.navigate([`/admin/value/form/${event.data.id}`]);
        return;

      case ActionTableEnum.SEARCH: // search element on array
        // set filter
        this._store.dispatch(ValueAction.setFilter({filter: event.data.libelle}));
        // filters data streams
        this.values$ = this.values$.pipe(
          combineLatestWith(this.filter$),
          map(([values, filter]: [ReadonlyArray<ValueInterface>, string | undefined]) => {
            return values.filter((elt: ValueInterface) => {
              if (filter) {
                return elt.libelle.toLocaleLowerCase().indexOf(filter) !== -1;
              }
              return elt;
            })
          })
        );
        return;
    }
  }
}

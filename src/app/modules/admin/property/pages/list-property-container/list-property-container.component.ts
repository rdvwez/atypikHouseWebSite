import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {combineLatestWith, map, Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {ColumnTableInterface} from '../../../../../core/components/data-table/column-table.interface';
import {PropertyAction, PropertyState, selectFilterProperty} from '../../shared/store';
import {PropertyInterface} from '../../shared/model/property.interface';
import {Router} from '@angular/router';
import {ActionTableEnum} from '../../../../../core/components/data-table/action-table.enum';
import {DataActionEmitInterface} from '../../../../../core/components/data-table/data-action-emit.interface';
import {selectProperties} from '../../shared/store/property.selector';

@Component({
  selector: 'app-list-property-container',
  templateUrl: './list-property-container.component.html',
  styleUrls: ['./list-property-container.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListPropertyContainerComponent implements OnInit {
  properties$: Observable<ReadonlyArray<PropertyInterface>> = this._store.pipe(select(selectProperties));

  headers: ColumnTableInterface<PropertyInterface>[] = [
    {headerName: 'Propriete', fieldName: 'libelle', isModelProperty: true},
    {headerName: 'Description', fieldName: 'description', isModelProperty: true},
    {headerName: 'Obligatoire', fieldName: 'is_required', isModelProperty: true},
    {headerName: 'Category', fieldName: 'category', isModelProperty: true},
  ];
  filter$: Observable<string | undefined> = this._store.pipe(select(selectFilterProperty));

  constructor(
    private _store: Store<PropertyState>,
    private _router: Router) {
  }

  ngOnInit(): void {
    this._store.dispatch(PropertyAction.listProperty());
  }

  /**
   * Select item thematic && make action DELETE && UPDATE
   * @param event
   */
  onSelectElement(event: DataActionEmitInterface<PropertyInterface>): void {
    switch (event.action) {
      case ActionTableEnum.DELETE:
        if (event.data.id) {
          this._store.dispatch(PropertyAction.deleteProperty({id: event.data.id}))
        }
        return;
      case ActionTableEnum.EDIT:
        this._router.navigate([`/admin/property/form/${event.data.id}`,]);
        return;

      case ActionTableEnum.SEARCH: // search element on array
        // set filter
        this._store.dispatch(PropertyAction.setFilter({filter: event.data.libelle}));
        // filters data streams
        this.properties$ = this.properties$.pipe(
          combineLatestWith(this.filter$),
          map(([values, filter]: [ReadonlyArray<PropertyInterface>, string | undefined]) => {
            return values.filter((elt: PropertyInterface) => {
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

import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {HouseAction, selectHouses, selectTotalHouses} from '../../shared/store';
import {Observable, Subject, takeUntil} from 'rxjs';
import {HouseInterface} from '../../shared/model/house.interface';
import {ColumnTableInterface} from '../../../../../core/components/data-table/column-table.interface';
import {selectLoading} from '../../../../../core/components/utils/load/store';
import {DataActionEmitInterface} from '../../../../../core/components/data-table/data-action-emit.interface';
import {ActionTableEnum} from '../../../../../core/components/data-table/action-table.enum';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-house-container',
  templateUrl: './list-house-container.component.html',
  styleUrls: ['./list-house-container.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListHouseContainerComponent implements OnInit, OnDestroy {
  // Constant
  page = 1;
  // Streams
  houses$: Observable<ReadonlyArray<HouseInterface>> = this._store.pipe(select(selectHouses(this.page)));
  loading$: Observable<boolean> = this._store.pipe(select(selectLoading));
  total$: Observable<number> = this._store.pipe(select(selectTotalHouses));
  destroyed$: Subject<void> = new Subject();

  total: number;
  headers: ColumnTableInterface<HouseInterface>[] = [
    {headerName: 'Nom', fieldName: 'libelle', isModelProperty: true},
    {headerName: 'Nombre personne', fieldName: 'person_number', isModelProperty: true},
    {headerName: 'Catégorie', fieldName: 'category', isModelProperty: true},
    {headerName: 'Thématique', fieldName: 'thematic', isModelProperty: true},
    {headerName: 'Adresse', fieldName: 'address', isModelProperty: true},
    {headerName: 'Ville', fieldName: 'city', isModelProperty: true},
    {headerName: 'Prix', fieldName: 'price', isModelProperty: true}
  ];

  constructor(private _store: Store, private _router: Router) {

  }

  ngOnInit(): void {
    this._store.dispatch(HouseAction.listHouse());
    this.total$
      .pipe(takeUntil(this.destroyed$))
      .subscribe((result: number) => {
        this.total = result;
      });
  }

  /**
   * Select item thematic && make action DELETE && UPDATE
   * @param event
   */
  onSelectElement(event: DataActionEmitInterface<HouseInterface>): void {
    switch (event.action) {
      case ActionTableEnum.DELETE:
        if (event.data.id) {
          this._store.dispatch(HouseAction.deleteHouse({id: event.data.id}))
        }
        return;
      case ActionTableEnum.EDIT:
        this._router.navigate([`/admin/house/form/${event.data.id}`,]);
        return;
    }
  }

  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  /**
   * @param event
   */
  getPage(event: number) {
    this.page = event;
    this.houses$ = this._store.pipe(select(selectHouses(this.page)));
  }
}

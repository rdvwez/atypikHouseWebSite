import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {combineLatestWith, map, Observable, Subject, takeUntil} from 'rxjs';
import {HouseInterface} from '../../../../admin/house/shared/model/house.interface';
import {select, Store} from '@ngrx/store';
import {HouseAction, selectFilterHouse, selectHouses, selectTotalHouses} from '../../../../admin/house/shared/store';
import {selectLoading} from '../../../../../core/components/utils/load/store';
import {ColumnTableInterface} from '../../../../../core/components/data-table/column-table.interface';
import {DataActionEmitInterface} from '../../../../../core/components/data-table/data-action-emit.interface';
import {ActionTableEnum} from '../../../../../core/components/data-table/action-table.enum';
import {Router} from '@angular/router';

@Component({
  selector: 'app-owner-house',
  templateUrl: './owner-house.component.html',
  styleUrls: ['./owner-house.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OwnerHouseComponent implements OnInit {

  // Constant
  page = 1;
  // Streams
  houses$: Observable<ReadonlyArray<HouseInterface>> = this._store.pipe(select(selectHouses(this.page)));
  loading$: Observable<boolean> = this._store.pipe(select(selectLoading));
  total$: Observable<number> = this._store.pipe(select(selectTotalHouses));
  destroyed$: Subject<void> = new Subject();
  filter$: Observable<string | undefined> = this._store.pipe(select(selectFilterHouse));

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

  constructor(
    private _store: Store,
    private _router: Router
  ) {
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
          this._store.dispatch(HouseAction.deleteHouse({id: event.data.id}));
        }
        return;
      case ActionTableEnum.EDIT:
        this._router.navigate([`/owner/house/form/${event.data.id}`]);
        return;
      case ActionTableEnum.VIEW:
        this._router.navigate([`/owner/house/${event.data.id}`]);
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

  /**
   * @param event
   */
  onFilter(event: string) {
    // filter event
    this._store.dispatch(HouseAction.setFilter({filter: event}));
    this.houses$ = this.houses$.pipe(
      combineLatestWith(this.filter$),
      map(([values, filter]: [ReadonlyArray<HouseInterface>, string | undefined]) => {
        return values.filter((elt: HouseInterface) => {
          if (filter) {
            return elt.libelle.toLocaleLowerCase().indexOf(filter) !== -1;
          }
          return elt;
        })
      })
    )
  }
}

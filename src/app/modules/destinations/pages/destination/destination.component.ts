import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subject, takeUntil} from 'rxjs';
import {select, Store} from '@ngrx/store';
import { Meta, Title } from '@angular/platform-browser';
import {selectLoading} from '../../../../core/components/utils/load/store';

import {CategoryActions} from '../../../admin/category/shared/store/category.action';
import {DESTINATION_CONST} from '../../shared/constant/destination.constant';
import {FormBuilder, FormGroup} from '@angular/forms';
import {DataSelectInterface} from '../../../../core/components/data-select/data-select.interface';

import {Router} from '@angular/router';
import {selectCategories} from '../../../admin/category/shared/store';
import {ThematicAction} from '../../../admin/thematic/shared/store/thematic.action';
import {HouseAction, selectHouses, selectTotalHouses} from '../../../admin/house/shared/store';
import {HouseInterface} from '../../../admin/house/shared/model/house.interface';
import {DataSelectService} from '../../../../shared/service/data-select.service';
import {selectThematics} from '../../../admin/thematic/shared/store';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.css']
})
export class DestinationComponent implements OnInit, OnDestroy {
  // constant
  dataConst = DESTINATION_CONST;
  total: number;
  page = 1;
  // store
  loading$: Observable<boolean> = this._store.pipe(select(selectLoading));
  thematics$: Observable<DataSelectInterface[]>;
  houses$: Observable<readonly HouseInterface[]> = this._store.pipe(select(selectHouses(this.page)));
  categories$: Observable<DataSelectInterface[]>;
  total$: Observable<number> = this._store.pipe(select(selectTotalHouses));
  // forms
  searchForm: FormGroup = this.fb.group({
    city: [''],
    category_id: [''],
    thematic_id: ['']
  });

  private destroyed$: Subject<void> = new Subject<any>();

   // Définition des différentes balises pour le SEO
   updateTag() {
    this.metaService.addTag({ rel: 'canonical', href: "https://www.atypikhouse.com/destinations" });
    this.metaService.updateTag({ httpEquiv: 'Content-Type', content: 'text/html' }); // Indique aux agents et serveurs de prendre le contenu de cette page en tant que HTML
    this.metaService.updateTag({ property: 'og-type', content: "Site web"}); /* Indique le type de l'objet */
    this.metaService.updateTag({ name: 'keywords', content: 'hébergement alternative europe' })
    this.metaService.updateTag({ name: 'robots', content: 'index, follow' }); // Permet au robot d'indexer la page
    this.metaService.updateTag({ property: 'og:title', content: "AtypikHouse - Location d'hébergement alternative - Home page" }) 
    this.metaService.updateTag({ name: 'description', content: ` Explorez notre sélection de logements atypiques dans différentes destinations. Utilisez notre formulaire de recherche pour trouver la ville idéale et choisissez parmi une variété de catégories et de thèmes. Réservez en ligne et vivez une expérience unique lors de votre prochain séjour.` });
  }

  constructor(
    private metaService: Meta,
    private _store: Store,
    private fb: FormBuilder,
    private router: Router
  ) {   
    this.updateTag();
    let dataService = inject(DataSelectService);
    this._store.dispatch(ThematicAction.listThematic());
    this._store.dispatch(CategoryActions.listCategory());
    this._store.dispatch(HouseAction.listHouse());

    this.getTotal();
    this.thematics$ = dataService.format(this._store.pipe(select(selectThematics)), 'libelle')
    this.categories$ = dataService.format(this._store.pipe(select(selectCategories)), 'libelle');
  }

  ngOnInit(): void {
  }


  /**
   * result on search params
   */
  onSearch(): void {
    // check search form
    if (!this.searchForm.value.city && !this.searchForm.value.category_id && !this.searchForm.value.thematic_id) {
      this._store.dispatch(HouseAction.listHouse());
      return;
    }

    this.searchForm.patchValue({
      thematic_id: Number(this.searchForm.value.thematic_id),
      category_id: Number(this.searchForm.value.category_id),
    })
    // dispatch actions search
    this._store.dispatch(HouseAction.searchHouse({payload: this.searchForm.value}));
  }

  goToHouse(idHouse: number): void {
    this.router.navigate([`house/${idHouse}`]);
  }

  getTotal() {
    this.total$.pipe(
      takeUntil(
        this.destroyed$
      )
    ).subscribe((result: number) => {
      this.total = result;
    })
  }

  getPage(event: number) {
    this.page = event;
    this.houses$ = this._store.pipe(select(selectHouses(this.page)))
  }

  /**
   * track by function for NgFor loop
   * @param
   */
  trackByFn(index: number, house: any): any {
    return house.id || index;
  }

  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}

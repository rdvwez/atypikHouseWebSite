import {ChangeDetectionStrategy, Component, inject, OnInit} from '@angular/core';
import {HOME_CONSTANT} from '../../constant/home.constant';
import {Observable} from 'rxjs';
import {HouseInterface} from '../../../admin/house/shared/model/house.interface';
import {select, Store} from '@ngrx/store';
import {HouseAction, selectHouses} from '../../../admin/house/shared/store';
import {HouseService} from '../../../admin/house/shared/service/house.service';
import {Meta} from '@angular/platform-browser';
import {CityInterface} from '../../../admin/house/shared/model/city.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  dataConst = HOME_CONSTANT;
  page = 1;
  houses$: Observable<readonly HouseInterface[]> = this._store.pipe(select(selectHouses(this.page, 6)));
  cities$: Observable<string[]>;
  cities: CityInterface[];

  // Définition des différentes balises pour le SEO
  updateTag() {
    this.metaService.addTag({rel: 'canonical', href: "https://www.atypikhouse.com/"});
    this.metaService.updateTag({httpEquiv: 'Content-Type', content: 'text/html'}); // Indique aux agents et serveurs de prendre le contenu de cette page en tant que HTML
    this.metaService.updateTag({property: 'og-type', content: "Site web"}); /* Indique le type de l'objet */
    this.metaService.updateTag({name: 'robots', content: 'index, follow'}); // Permet au robot d'indexer la page
    this.metaService.updateTag({ name: 'keywords', content: 'hébergement alternative europe' })
    this.metaService.updateTag({
      property: 'og:title',
      content: "AtypikHouse - Location d'hébergement alternative - Home page"
    }) // Titre pour l'encadré dans les recherches
    this.metaService.updateTag({ name: 'description', content: `Découvrez AtypikHouse pour une expérience d'hébergement unique en France en europe. 
    Réservez en ligne une nuit ou un week-end dans des logements insolites tels que bulles, cabanes dans les arbres, yourtes ou igloos. Offrez-vous une escapade inoubliable adaptée à tous les goûts et budgets !` });
  }

  constructor(
    private metaService: Meta,
    private _store: Store,
  ) {
    // this.metaService.removeTag("name='description'");
    this.updateTag();
    this.getCities();
  }

  ngOnInit(): void {
    this._store.dispatch(HouseAction.listHouse());
  }

  /**
   * track by function for NgFor loop
   * @param
   */
  trackByFn(index: number, house: any): any {
    return house.id || index;
  }

  getCities(): void {
    inject(HouseService).getCities().subscribe((res: CityInterface[]) => {
      this.cities = res.slice(0, 6);
    });
  }
}

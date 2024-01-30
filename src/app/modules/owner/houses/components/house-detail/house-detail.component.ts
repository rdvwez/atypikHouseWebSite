import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HouseInterface} from '../../../../admin/house/shared/model/house.interface';
import {HouseService} from '../../../../admin/house/shared/service/house.service';
import {HouseActionEnum} from '../../house-action.enum';
import {UserInterface} from '../../../../admin/users/shared/model/user.interface';
import {environment} from '../../../../../../environments/environment';
import {Meta} from '@angular/platform-browser';
import {AuthService} from '../../../../auth/shared/service/auth.service';

@Component({
  selector: 'app-house-detail',
  templateUrl: './house-detail.component.html',
  styleUrls: ['./house-detail.component.css']
})
export class HouseDetailComponent {
  @Input() house: HouseInterface | undefined | null;
  @Output() houseAction = new EventEmitter<{ action: string, data: HouseInterface | undefined | null }>();
  action = HouseActionEnum;

  updateTag(houseId: string) {
    this.metaService.addTag({rel: 'canonical', href: `https://www.atypikhouse.com/destinations/${houseId}`});
    this.metaService.updateTag({httpEquiv: 'Content-Type', content: 'text/html'}); // Indique aux agents et serveurs de prendre le contenu de cette page en tant que HTML
    this.metaService.updateTag({property: 'og-type', content: "Site web"}); /* Indique le type de l'objet */
    this.metaService.updateTag({name: 'robots', content: 'index, follow'}); // Permet au robot d'indexer la page
    this.metaService.updateTag({name: 'keywords', content: 'hébergement alternative europe'})
    this.metaService.updateTag({
      property: 'og:title',
      content: "AtypikHouse - Location d'hébrgement alternative - detail d'un hébergement"
    })
    this.metaService.updateTag({
      name: 'description',
      content: `Découvrez les détails cet'hébergement. Profitez de notre galerie d'images pour explorer les caractéristiques, la décoration et l'atmosphère unique de cet hébergement insolite. Réservez dès maintenant et vivez une expérience inoubliable chez AtypikHouse.`
    });
  }

  @Input() userState: UserInterface;
  environment = environment
  active = 1;

  constructor(
    private metaService: Meta,
    private _houseService: HouseService,
    private _authService: AuthService,
    private activatedRoute: ActivatedRoute,
    private _router: Router
  ) {
  }

  ngOnInit() {
    // Extract the 'id' parameter from the route
    this.activatedRoute.params.subscribe(params => {
      const houseId = params['id'];
      // Utilisez l'ID de la maison comme nécessaire
      this.updateTag(houseId);
    });
  }

  completeAddress(house: HouseInterface): string {
    return `${house.address} ${house.country}`;
  }

  emitAction(action: HouseActionEnum, house: HouseInterface) {
    this.houseAction.emit({
      action,
      data: house
    })
  }

  haveModifyRight(): boolean {
    if (this.userState) {
      return this.userState.is_owner
    }
    return false;
  }

  isNotConnected(): boolean {
    return !!this.userState;
  }

  // forms reservation
  getUrlImage(house: HouseInterface, numero: number): string {
    if (house.images.length !== 0) {
      return environment.hostImage + house.images[numero].path
    }
    return "";
  }
}

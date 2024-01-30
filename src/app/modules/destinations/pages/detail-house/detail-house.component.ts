import {Component, OnDestroy, OnInit} from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';
import {Observable, Subject, takeUntil} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {ActivatedRoute, Router} from '@angular/router';
import {HouseInterface} from '../../../admin/house/shared/model/house.interface';
import {selectSelectedHouse} from '../../../admin/house/shared/store';
import {HouseActionEnum} from '../../../owner/houses/house-action.enum';
import {HouseService} from '../../../admin/house/shared/service/house.service';
import {UserInterface} from '../../../admin/users/shared/model/user.interface';
import {selectUserConnected} from '../../../auth/shared/store';
import {AuthService} from '../../../auth/shared/service/auth.service';

@Component({
  selector: 'app-detail-house',
  templateUrl: './detail-house.component.html',
  styleUrls: ['./detail-house.component.css']
})
export class DetailHouseComponent implements OnInit, OnDestroy {

  title = "AtypikHouse - Location d'hébergement alternative - Détail d'un hébergement";

  updateTag() {
    this.metaService.addTag({rel: 'canonical', href: "https://www.atypikhouse.com/destinationsn"});
    this.metaService.updateTag({httpEquiv: 'Content-Type', content: 'text/html'}); // Indique aux agents et serveurs de prendre le contenu de cette page en tant que HTML
    this.metaService.updateTag({property: 'og-type', content: "Site web"}); /* Indique le type de l'objet */
    this.metaService.updateTag({name: 'keywords', content: 'hébergement alternative europe'})
    this.metaService.updateTag({name: 'robots', content: 'index, follow'}); // Permet au robot d'indexer la page
    this.metaService.updateTag({
      property: 'og:title',
      content: "AtypikHouse - Location d'hébergement alternative - Détail d'un hébergement"
    }) // Titre pour l'encadré dans les recherches
  }

  house$: Observable<HouseInterface | null | undefined> = this._store.pipe(select(selectSelectedHouse));
  userConnected$: Observable<UserInterface | undefined> = this._store.pipe(select(selectUserConnected));
  user: UserInterface;
  destroyed$: Subject<void> = new Subject<any>();

  constructor(
    private metaService: Meta,
    private titleService: Title,
    private _store: Store,
    private activatedRoute: ActivatedRoute,
    private _router: Router,
    private _houseService: HouseService,
    private _authService: AuthService
  ) {
    this.metaService.removeTag("name='description'");
    this.titleService.setTitle(this.title);
    this.updateTag();
  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.house$ = this._houseService.read(id);

    this.getUser();
  }

  onActionHouse(event: any) {
    const id = this.activatedRoute.snapshot.params['id'];
    switch (event.action) {
      case HouseActionEnum.RESERVATION:
        this._authService.setLastLink(`destinations/${id}`);
        this._router.navigate(['/auth/signin']);
        return;
    }
  }

  getUser(): void {
    this.userConnected$.pipe(
      takeUntil(this.destroyed$)
    ).subscribe((result: UserInterface | undefined) => {
      if (result) {
        this.user = result
      }
    })
  }

  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}

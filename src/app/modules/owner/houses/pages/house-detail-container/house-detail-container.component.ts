import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subject, takeUntil} from 'rxjs';
import {HouseInterface} from '../../../../admin/house/shared/model/house.interface';
import {HouseService} from '../../../../admin/house/shared/service/house.service';
import {ActivatedRoute, Router} from '@angular/router';
import {HouseActionEnum} from '../../house-action.enum';
import {UserInterface} from '../../../../admin/users/shared/model/user.interface';
import {select, Store} from '@ngrx/store';
import {selectUserConnected} from '../../../../auth/shared/store';

@Component({
  selector: 'app-house-detail-container',
  templateUrl: './house-detail-container.component.html',
  styleUrls: ['./house-detail-container.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HouseDetailContainerComponent implements OnInit, OnDestroy {
  house$: Observable<HouseInterface | undefined>;
  userConnected$: Observable<UserInterface | undefined> = this._store.pipe(select(selectUserConnected));
  destroyed$: Subject<void> = new Subject<any>();
  user: UserInterface;

  constructor(
    private _houseService: HouseService,
    private activatedRoute: ActivatedRoute,
    private _router: Router,
    private _store: Store
  ) {
  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.house$ = this._houseService.read(id);

    // user connected init
    this.getUser();
  }

  onActionHouse(event: any) {
    switch (event.action) {
      case HouseActionEnum.GOTO_MODIFY:
        this._router.navigate([`owner/house/form/${event.data.id}`]);
        return;

      case HouseActionEnum.RESERVATION:
        this._router.navigate([`owner/house/reservation/${event.data.id}`])
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

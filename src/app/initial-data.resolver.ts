import {Injectable, OnDestroy} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {first, forkJoin, Observable, Subject, takeUntil, tap} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {navigations} from './layout/common/navigation/store';
import {selectIsAuthenticated} from './modules/auth/shared/store';
import {AccessService} from './modules/auth/shared/service/access.service';

@Injectable({
  providedIn: 'root'
})

export class InitialDataResolver implements Resolve<any>, OnDestroy {
  private destroyed$: Subject<void> = new Subject<void>();
  isAuthenticated$: Observable<boolean> = this._store.pipe(select(selectIsAuthenticated), takeUntil(this.destroyed$));

  constructor(private _store: Store, private _accessService: AccessService) {
  }

  /* Initial data
   * ConnectState
  */
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return forkJoin([
      // reload state user
      this._store.pipe(
        tap(() => {
          this._accessService.reloadStateUser();
        }),
        first()
      ),
      // Load navigations state
      this._store.pipe(
        tap(() => {
          // dispatch navigations actions
          this.isAuthenticated$.subscribe((isAuthenticated) => {
            this._store.dispatch(navigations({isConnected: isAuthenticated}))
          })
        }),
        first()
      ),
      // Reload State data
    ]);
  }

  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}

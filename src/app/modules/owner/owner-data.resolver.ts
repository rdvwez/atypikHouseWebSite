import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {first, forkJoin, Observable, tap} from 'rxjs';
import {ModuleNavigationEnum, NavigationActions} from '../../layout/layouts/admin-layout/shrared/store';
import {AccessService} from '../auth/shared/service/access.service';

@Injectable({
  providedIn: 'root'
})
export class OwnerDataResolver  {

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
          // Get user state
          this._store.dispatch(NavigationActions.navigationInvoke({module: ModuleNavigationEnum.OWNER}));
        }),
        first()
      ),
    ]);
  }
}

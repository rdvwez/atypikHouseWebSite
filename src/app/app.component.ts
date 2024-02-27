import {Component} from '@angular/core';
import { TransferState } from '@angular/platform-browser';
import {TokenService} from './modules/auth/shared/service/token.service';
import {ThemeService} from './core/service/theme/theme.service';
import {NavigationEnd, Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {NavigationActions} from './layout/layouts/admin-layout/shrared/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'hatypikhouse-front';

  constructor(
    private accessService: TokenService,
    private theme: ThemeService,
    private _router: Router,
    private _store: Store,
    private transferState: TransferState) {
    // load theme
    this.theme.loadTheme('theme');
    // activated url
    this._router.events.subscribe(data => {
      if (data instanceof NavigationEnd) {
        // Dispatch event
        this._store.dispatch(NavigationActions.activatedUrl({url: data.url}));
      }
    });
  }

}

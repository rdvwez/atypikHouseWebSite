import {Inject, Injectable} from '@angular/core';
import {DOCUMENT} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  dirAsset = './assets/css/';

  constructor(@Inject(DOCUMENT) private document: Document) {
  }

  /**
   * Load theme Between admin && customer layout
   * @param themeName
   */
  loadTheme(themeName: string): void {
    const head = this.document.getElementsByTagName('head')[0];
    const themeSrc = this.document.getElementById('client-theme') as HTMLLinkElement;

    if (themeSrc) {
      themeSrc.href = `${this.dirAsset}${themeName}.min.css`
    } else {
      const style = this.document.createElement('link');
      style.id = 'client-theme';
      style.rel = 'stylesheet';
      style.href = `${this.dirAsset}${themeName}.min.css`;
      head.append(style);
    }
  }
}

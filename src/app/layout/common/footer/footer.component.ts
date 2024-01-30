import {Component, OnInit, PLATFORM_ID, Inject} from '@angular/core';
import { RouterModule } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  standalone: true,
  styleUrls: ['./footer.component.css'],
  imports:[RouterModule]
})
export class FooterComponent implements OnInit {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) { // Vérifie si le code ne s'exécute que sur le navigateur
      // Exécuté seulement côté client
      this.loadAxeptioScript();
    }
  }

  loadAxeptioScript(){
    // Définir les paramètres Axeptio
    (window as any).axeptioSettings = {
      clientId: "655e146f508b50f44623bccc",
      cookiesVersion: "projet dsp5 - archi o22b-fr-3",
    };

    // Chargement du script Axeptio seulement si on est côté client
    const script = document.createElement('script');
    script.async = true;
    script.src = "//static.axept.io/sdk.js";
    document.body.appendChild(script);
  }

}

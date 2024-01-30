import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-responsabilite',
  templateUrl: './responsabilite.component.html',
  styleUrls: ['./responsabilite.component.css']
})
export class ResponsabiliteComponent implements OnInit {

  // Définition des différentes balises pour le SEO
  updateTag() {
    this.metaService.addTag({ rel: 'canonical', href: "https://www.atypikhouse.com/compagny/responsabilite" });
    this.metaService.updateTag({ httpEquiv: 'Content-Type', content: 'text/html' }); // Indique aux agents et serveurs de prendre le contenu de cette page en tant que HTML
    this.metaService.updateTag({ property: 'og-type', content: "Site web"}); /* Indique le type de l'objet */
    this.metaService.updateTag({ name: 'keywords', content: 'hébergement alternative europe' })
    this.metaService.updateTag({ name: 'robots', content: 'index, follow' }); // Permet au robot d'indexer la page
    this.metaService.updateTag({ property: 'og:title', content: "AtypikHouse - Location d'hébergement alternative - Les responsabilités d'AtypikHouse" }) // Titre pour l'encadré dans les recherches
    this.metaService.updateTag({ name: 'description', content: `Découvrez les responsabilités sociétales d'AtypikHouse, une entreprise engagée envers la durabilité et la responsabilité sociale. Nous croyons en minimiser notre empreinte environnementale, favoriser des pratiques éthiques, promouvoir l'accessibilité et l'inclusivité, investir dans l'engagement communautaire, et chercher l'innovation sociale. Explorez comment nous contribuons positivement à la société et à l'environnement tout en offrant des hébergements alternatifs uniques et durables.`})
  }

  constructor(private metaService: Meta) {
    this.updateTag();
  }

  ngOnInit(): void {
  }

}

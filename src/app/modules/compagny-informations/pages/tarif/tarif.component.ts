import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-tarif',
  templateUrl: './tarif.component.html',
  styleUrls: ['./tarif.component.css']
})
export class TarifComponent implements OnInit {

    // Définition des différentes balises pour le SEO
    updateTag() {
      this.metaService.addTag({ rel: 'canonical', href: "https://www.atypikhouse.com/compagny/tarifs" });
      this.metaService.updateTag({ httpEquiv: 'Content-Type', content: 'text/html' }); // Indique aux agents et serveurs de prendre le contenu de cette page en tant que HTML
      this.metaService.updateTag({ property: 'og-type', content: "Site web"}); /* Indique le type de l'objet */
      this.metaService.updateTag({ name: 'robots', content: 'index, follow' }); // Permet au robot d'indexer la page
      this.metaService.updateTag({ name: 'keywords', content: 'hébergement alternative europe' })
      this.metaService.updateTag({ property: 'og:title', content: "AtypikHouse - Location d'hébergement alternative - Les tarifs d'AtypikHouse" }) // Titre pour l'encadré dans les recherches
      this.metaService.updateTag({ name: 'description', content: `Découvrez nos tarifs exclusifs chez AtypikHouse pour une expérience unique et mémorable. Explorez nos plans flexibles offrant un accès privilégié à une variété d'hébergements insolites. Du pittoresque au spectaculaire, nos lieux extraordinaires sont conçus pour émerveiller et inspirer. Optez pour le plan qui correspond à vos aspirations, vivez des moments inoubliables et transformez votre voyage en une aventure exceptionnelle. Choisissez parmi nos plans Basique, Standard ou Premium, chacun offrant des fonctionnalités spécifiques pour enrichir votre séjour.`})
    }

  constructor(private metaService: Meta) {
    this.updateTag();
  }

  ngOnInit(): void {
  }

}

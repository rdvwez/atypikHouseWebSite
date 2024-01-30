import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-politique-de-confidentialite',
  templateUrl: './politique-de-confidentialite.component.html',
  styleUrls: ['./politique-de-confidentialite.component.css']
})
export class PolitiqueDeConfidentialiteComponent implements OnInit {
  title= "AtypikHouse - Location d'hébergement alternative - Politique de confidentialité";

  // Définition des différentes balises pour le SEO
  updateTagPolitique() {
    this.metaService.addTag({ rel: 'canonical', href: "https://www.atypikhouse.com/documents/politique-de-confidentialite" });
    this.metaService.updateTag({ httpEquiv: 'Content-Type', content: 'text/html' }); // Indique aux agents et serveurs de prendre le contenu de cette page en tant que HTML
    this.metaService.updateTag({ property: 'og-type', content: "Site web"}); /* Indique le type de l'objet */
    this.metaService.updateTag({ name: 'keywords', content: 'hébergement alternative europe' })
    this.metaService.updateTag({ name: 'robots', content: 'index, follow' }); // Permet au robot d'indexer la page
    this.metaService.updateTag({ property: 'og:title', content: "AtypikHouse - Location d'hébergement alternative - Politique de confidentialité" }) // Titre pour l'encadré dans les recherches
    this.metaService.updateTag({ name: 'description', content: `Découvrez la politique de confidentialité d'AtypikHouse. Informations sur la collecte et l'utilisation de vos données personnelles, les formulaires de contact, les commentaires, les cookies, les médias, les droits sur vos données, les statistiques et mesures d'audience, la transmission des données, la durée de conservation, et comment nous protégeons vos données. En vigueur depuis le 25 Mai 2018.`})
  }

  constructor(private titleService : Title, private metaService: Meta) { 

    this.titleService.setTitle(this.title);
    this.updateTagPolitique();
  }

  ngOnInit(): void {
  }

}

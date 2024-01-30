import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-mentions-legales',
  templateUrl: './mentions-legales.component.html',
  styleUrls: ['./mentions-legales.component.css']
})
export class MentionsLegalesComponent implements OnInit {
  // title= "AtypikHouse - Location d'hébergement alternative - Mentions légales";

  // Définition des différentes balises pour le SEO
  updateTag() {
    this.metaService.addTag({ rel: 'canonical', href: "https://www.atypikhouse.comdocuments/mentions-legales" });
    this.metaService.updateTag({ httpEquiv: 'Content-Type', content: 'text/html' }); // Indique aux agents et serveurs de prendre le contenu de cette page en tant que HTML
    this.metaService.updateTag({ property: 'og-type', content: "Site web"}); /* Indique le type de l'objet */
    this.metaService.updateTag({ name: 'keywords', content: 'hébergement alternative europe' })
    this.metaService.updateTag({ name: 'robots', content: 'index, follow' }); // Permet au robot d'indexer la page
    this.metaService.updateTag({ property: 'og:title', content: "AtypikHouse - Location d'hébergement alternative - Mentions légales" }) // Titre pour l'encadré dans les recherches
    this.metaService.updateTag({ name: 'description', content: ` Découvrez les mentions légales d'AtypikHouse. Présentation du site, conditions générales d'utilisation, services fournis, limitations techniques, propriété intellectuelle, limitations de responsabilité, gestion des données personnelles, liens hypertextes et cookies, droit applicable et attribution de juridiction, principales lois concernées, lexique.`})
  }

  constructor(private titleService : Title, private metaService: Meta) { 
    // this.metaService.removeTag("name='description'");
    // this.titleService.setTitle(this.title);
    this.updateTag();
  }

  ngOnInit(): void {
  }

}

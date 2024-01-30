import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  title = "AtypikHouse - Location d'hébergement alternative - contactez nous";
  updateTag() {
    this.metaService.addTag({ rel: 'canonical', href: "https://www.atypikhouse.com/destinations" });
    this.metaService.updateTag({ httpEquiv: 'Content-Type', content: 'text/html' }); // Indique aux agents et serveurs de prendre le contenu de cette page en tant que HTML
    this.metaService.updateTag({ property: 'og-type', content: "Site web"}); /* Indique le type de l'objet */
    this.metaService.updateTag({ name: 'robots', content: 'index, follow' }); // Permet au robot d'indexer la page
    this.metaService.updateTag({ name: 'keywords', content: 'hébergement alternative europe' })
    this.metaService.updateTag({ property: 'og:title', content: "AtypikHouse - Location d'hébergement alternative - contactez nous" }) // Titre pour l'encadré dans les recherches
    this.metaService.updateTag({ name: 'description', content: ` Contactez-nous pour toutes vos questions sur nos hébergements insolites et cabanes sur AtypikHouse. Explorez notre Centre d'Aide en ligne ou utilisez le formulaire ci-dessous pour soumettre vos demandes. Notre équipe est là pour vous aider à trouver le séjour insolite parfait. En cas d'urgence, contactez-nous directement au 01 12 48 96 76. AtypikHouse - Rendez votre expérience inoubliable !` });
  }

  constructor(private metaService: Meta, private titleService: Title) { 

    this.titleService.setTitle(this.title);
    this.updateTag();
  }

  ngOnInit(): void {
  }

}

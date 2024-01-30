import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-inspirations',
  templateUrl: './inspirations.component.html',
  styleUrls: ['./inspirations.component.css']
})
export class InspirationsComponent implements OnInit {

  updateTag() {
    this.metaService.addTag({ rel: 'canonical', href: "https://www.atypikhouse.com/detail" });
    this.metaService.updateTag({ httpEquiv: 'Content-Type', content: 'text/html' }); // Indique aux agents et serveurs de prendre le contenu de cette page en tant que HTML
    this.metaService.updateTag({ property: 'og-type', content: "Site web"}); /* Indique le type de l'objet */
    this.metaService.updateTag({ name: 'keywords', content: 'hébergement alternative europe' })
    this.metaService.updateTag({ name: 'robots', content: 'index, follow' }); // Permet au robot d'indexer la page
    this.metaService.updateTag({ property: 'og:title', content: "AtypikHouse - Location d'hébergement alternative - Nous vous  Vous sentez vous inspirer?" }) // Titre pour l'encadré dans les recherches
    this.metaService.updateTag({ name: 'description', content: ` Découvrez l'art de personnaliser votre expérience chez AtypikHouse ! Chaque logement a une histoire unique, et nous croyons en la magie de la personnalisation. Partagez-nous votre inspiration pour rendre votre séjour encore plus mémorable. Que ce soit une idée de décoration, des équipements spécifiques ou des touches artistiques, nous sommes là pour concrétiser vos rêves. Utilisez le formulaire ci-dessous pour soumettre votre idée. Chez AtypikHouse, chaque détail compte dans la création de souvenirs exceptionnels.` });
  }

  constructor(private metaService: Meta,) { 
    this.updateTag();
  }

  ngOnInit(): void {
  }

}

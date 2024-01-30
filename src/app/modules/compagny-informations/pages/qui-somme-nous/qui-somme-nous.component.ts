import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-qui-somme-nous',
  templateUrl: './qui-somme-nous.component.html',
  styleUrls: ['./qui-somme-nous.component.css']
})
export class QuiSommeNousComponent implements OnInit {

  // Définition des différentes balises pour le SEO
  updateTag() {
    this.metaService.addTag({ rel: 'canonical', href: "https://www.atypikhouse.com/compagny/qui-sommes-nous" });
    this.metaService.updateTag({ httpEquiv: 'Content-Type', content: 'text/html' }); // Indique aux agents et serveurs de prendre le contenu de cette page en tant que HTML
    this.metaService.updateTag({ property: 'og-type', content: "Site web"}); /* Indique le type de l'objet */
    this.metaService.updateTag({ name: 'robots', content: 'index, follow' }); // Permet au robot d'indexer la page
    this.metaService.updateTag({ name: 'keywords', content: 'hébergement alternative europe' })
    this.metaService.updateTag({ property: 'og:title', content: "AtypikHouse - Location d'hébergement alternative - Qui sommes nous ?" }) // Titre pour l'encadré dans les recherches
    this.metaService.updateTag({ name: 'description', content: `Découvrez qui nous sommes chez AtypikHouse, une SARL passionnée formée par trois associés partageant un amour commun pour les voyages, l'hébergement alternatif et la symbiose avec la nature. Notre mission est d'introduire un service de location d'hébergements alternatifs en France et en Europe, transformant l'ordinaire en extraordinaire. AtypikHouse sollicite votre WebAgency pour concevoir un site novateur permettant aux visiteurs de découvrir nos hébergements uniques, de se connecter à nos réseaux sociaux, de s'inscrire et de réserver leur séjour. Rejoignez-nous dans notre aventure pour transformer le voyage et l'hébergement !`})
  }

  constructor(private metaService: Meta) { 
    this.updateTag();
  }

  ngOnInit(): void {
  }

}

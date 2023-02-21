import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-hebergements',
  templateUrl: './hebergements.component.html',
  styleUrls: ['./hebergements.component.scss']
})
export class HebergementsComponent implements OnInit {

  public descriptionContent = "Trouvez un hebergement atypic, adapter a vos besoins et Créez des Souvenirs Inoubliables"
  public pageTitle = "AtypikHouse : Nos differente hebergemnts"

  constructor(private metaService: Meta, private titleService:Title) {
    this.metaService.addTag({name: 'description', content: this.descriptionContent});
    this.titleService.setTitle(this.pageTitle);
   }

  ngOnInit(): void {
  }

}

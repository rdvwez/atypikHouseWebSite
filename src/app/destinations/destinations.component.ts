import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.scss']
})
export class DestinationsComponent implements OnInit {

  public descriptionContent = "Touvez sur cette page des destinations de rèves pour vous et votre famille dans nos atypic house à travers l'europe"
  public pageTitle = "AtypikHouse : Des destinations de rêves"

  constructor(private metaService: Meta, private titleService:Title) {
    this.metaService.addTag({name: 'description', content: this.descriptionContent});
    this.titleService.setTitle(this.pageTitle);

   }
  
  ngOnInit(): void {
  }

}

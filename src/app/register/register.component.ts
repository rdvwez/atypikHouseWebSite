import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public descriptionContent = "Profitez de plus de 100.000 offres et découvrez des logements alternatif en Europe!"
  public pageTitle = "AtypikHouse : Inscrivez-vous Maintenant"

  constructor(
    private metaService: Meta, 
    private titleService:Title) { 
      this.metaService.addTag({name: 'description', content: this.descriptionContent});
      this.titleService.setTitle(this.pageTitle);
    }

  ngOnInit(): void {
  }

}

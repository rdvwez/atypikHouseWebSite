import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public descriptionContent = "Trouvez des locations de vacances, des chalets, des maisons de plage, des maisons et des expériences uniques dans le monde entier, le tout rendu possible par les hôtes sur AtypikHouse."
  public pageTitle = "AtypikHouse : locations de vacances, cabanes, maisons de plage, roulotte"

  constructor(private metaService: Meta, private titleService:Title) { 
    this.metaService.addTag({name: 'description', content: this.descriptionContent});
    this.titleService.setTitle(this.pageTitle);
  }

  ngOnInit(): void {
  }

}

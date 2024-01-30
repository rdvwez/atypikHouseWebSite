import {Component, OnInit} from '@angular/core';
import {ThemeService} from '../../../core/service/theme/theme.service';

@Component({
  selector: 'app-visitor-layout',
  templateUrl: './visitor-layout.component.html',
  styleUrls: ['./visitor-layout.component.css']
})
export class VisitorLayoutComponent implements OnInit {

  constructor(private theme: ThemeService) {
  }

  ngOnInit(): void {
    this.theme.loadTheme('theme');
  }

}

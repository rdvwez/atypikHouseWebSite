import {Component, Input, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {

  @Input() title: string;

  constructor() {
  }

  ngOnInit(): void {
  }

}

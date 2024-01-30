import {Component, Input, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-text-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './text-page.component.html',
  styleUrls: ['./text-page.component.css']
})
export class TextPageComponent implements OnInit {

  @Input() text: string;
  @Input() customClass: string = '';

  constructor() {
  }

  ngOnInit(): void {
  }

}

import {Component, Input, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-button-text',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button-text.component.html',
  styleUrls: ['./button-text.component.css']
})
export class ButtonTextComponent implements OnInit {

  @Input() customClass: string;

  constructor() {
  }

  ngOnInit(): void {
  }

}

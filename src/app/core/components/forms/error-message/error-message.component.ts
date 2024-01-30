import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-error-message',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.css']
})
export class ErrorMessageComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}

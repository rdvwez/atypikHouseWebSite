import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-input-label',
  standalone: true,
  templateUrl: './input-label.component.html',
  styleUrls: ['./input-label.component.css']
})
export class InputLabelComponent implements OnInit {
  @Input() forInput: string = '';

  ngOnInit(): void {
  }

}

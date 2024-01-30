import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';

export enum TypeAlert {
  INIT,
  ERROR,
  SUCCESS
}

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlertComponent implements OnInit {

  @Input() type: TypeAlert = TypeAlert.INIT;
  typeAlert = TypeAlert;

  constructor() {
  }

  ngOnInit(): void {
  }

  setClassTypeAlert(): string {
    switch (this.type) {
      case TypeAlert.SUCCESS:
        return 'alert alert-soft-success';
      case TypeAlert.ERROR:
        return 'alert alert-soft-danger';
      default:
        return '';
    }
  }
}

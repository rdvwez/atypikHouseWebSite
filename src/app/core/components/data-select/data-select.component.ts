import {Component, Input, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DataSelectInterface} from './data-select.interface';
import {FormGroup} from '@angular/forms';
import {SharedModule} from '../../../shared/shared.module';

@Component({
  selector: 'app-data-select',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './data-select.component.html',
  styleUrls: ['./data-select.component.css']
})
export class DataSelectComponent implements OnInit {

  @Input() data: DataSelectInterface[] | null = [];
  // forms params
  @Input() placeHolder: string;
  @Input() formName: string;
  @Input() formGroup: FormGroup;
  @Input() customClass: string

  constructor() {
  }

  ngOnInit(): void {

  }

  /**
   * track by function for NgFor loop
   * @param
   */
  trackByFn(index: number, d: any): any {
    return d.name || index;
  }
}

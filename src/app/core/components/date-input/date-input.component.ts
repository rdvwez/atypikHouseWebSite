import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import flatpickr from "flatpickr";
import {SharedModule} from '../../../shared/shared.module';
import {FormGroup} from '@angular/forms';
import {DateOptionInterface} from './date-option.interface';
import { HOME_CONSTANT } from 'src/app/modules/homes/constant/home.constant';

@Component({
  selector: 'app-date-input',
  standalone: true,
  imports: [
    SharedModule
  ],
  templateUrl: './date-input.component.html',
  styleUrls: ['./date-input.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DateInputComponent implements OnInit {
  dataConst = HOME_CONSTANT;
  @Input() customClass: string = ''
  @Input() customId: string
  @Input() formName: string;
  @Input() formGroup: FormGroup;
  @Input() placeHolder: string = 'Select the Dates';
  @Input() dateOptions: DateOptionInterface;
  @Output() onChangeDateAction = new EventEmitter<string>();

  @Input() minChangeDate: string = '';

  constructor() {
  }

  ngOnInit() {
    let options: any = this.dateOptions
    flatpickr('input.js-flatpickr', {
      ...options
    });
  }

  onChangeDate(): void {
    let data = this.formGroup.get(this.formName)?.value;
    this.onChangeDateAction.emit(data);
  }

}

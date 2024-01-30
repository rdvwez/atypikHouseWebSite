import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {SharedModule} from '../../../../../shared/shared.module';
import {FormActionsEnum} from '../../../../../shared/enums/form-actions.enum';
import {ReservationInterface} from '../../shared/model/reservation.interface';
import {RESERVATION_CONSTANT} from '../../shared/constant/reservation.constant';
import {InputTextComponent} from '../../../../../core/components/forms/input-text/input-text.component';
import {DateInputComponent} from '../../../../../core/components/date-input/date-input.component';
import {ButtonSubmitComponent} from '../../../../../core/components/forms/button-submit/button-submit.component';
import * as moment from 'moment';
import {French} from 'flatpickr/dist/l10n/fr';
import {DateOptionInterface} from '../../../../../core/components/date-input/date-option.interface';

@Component({
  selector: 'app-form-reservation',
  templateUrl: './form-reservation.component.html',
  styleUrls: ['./form-reservation.component.css'],
  standalone: true,
  imports: [
    SharedModule,
    InputTextComponent,
    DateInputComponent,
    ButtonSubmitComponent
  ]
})
export class FormReservationComponent implements OnInit {
  formReservation: FormGroup;
  @Output() formAction = new EventEmitter<{ value: ReservationInterface, action: FormActionsEnum }>();
  dataConst = RESERVATION_CONSTANT;
  @Input() selectedHouseId: number | undefined;
  minDate: string;
  @Input() amount: number;

  dateOptions: DateOptionInterface = {
    enableTime: false,
    dateFormat: "d/m/Y",
    minDate: "today",
    locale: French,
    mode: "range"
  }

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.initForm();
    this.checkForm();
  }

  initForm(): void {
    this.formReservation = this.fb.group({
      date_range: ['', Validators.required],
      card_number: ['', Validators.required],
      card_exp: ['', Validators.required],
      amount: [this.amount, Validators.required],
      card_first_name: [""],
      card_last_name: [""],
      cvc: ['', Validators.required],
      house_id: ['']
    })
  }

  emitAction(): void {
    this.formAction.emit({
      value: this.formReservation.value,
      action: FormActionsEnum.CREATE
    })
  }

  checkForm() {
    if (this.selectedHouseId) {
      this.formReservation.patchValue({
        house_id: this.selectedHouseId,
        amount: this.amount
      })
    }
  }

  onChange(event: string): void {
    this.minDate = event;
    this.formReservation.patchValue({
      amount: this.amountGlobal()
    })
  }

  amountGlobal(): number {
    let date = this.formReservation.value.date_range.split('au');
    const a = moment(date[0], "DD/MM/YYYY");
    const days = moment.duration(a.diff(moment(date[1], "DD/MM/YYYY")));
    return Math.abs(days.asDays()) * this.amount;
  }
}


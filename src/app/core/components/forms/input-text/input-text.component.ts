import {Component, Input, OnInit} from '@angular/core';
import {SharedModule} from '../../../../shared/shared.module';
import {FormGroup} from '@angular/forms';
import {InputLabelComponent} from '../input-label/input-label.component';
import {ErrorMessageComponent} from '../error-message/error-message.component';

@Component({
  selector: 'app-input-text',
  standalone: true,
  imports: [
    SharedModule,
    InputLabelComponent,
    ErrorMessageComponent
  ],
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.css']
})
export class InputTextComponent implements OnInit {

  @Input() label: string;
  @Input() formGroup: FormGroup;
  @Input() formName: string = '';
  @Input() type: string = 'text';
  @Input() forInput: string = '';
  @Input() placeHolder: string;
  @Input() customClass: string = 'form-control form-control-lg';
  @Input() errorMessage: string;

  constructor() {
  }

  ngOnInit(): void {
  }

  errorClassValidation(): string {
    if (this.formGroup.get(this.formName)?.dirty && this.formGroup.get(this.formName)?.errors) {
      return this.customClass + ' is-invalid';
    }
    return this.customClass;
  }

  isErrorForm(): boolean {
    return !!(this.formGroup.get(this.formName)?.touched && this.formGroup.get(this.formName)?.errors)
  }
}

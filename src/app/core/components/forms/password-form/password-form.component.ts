import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormGroup} from '@angular/forms';
import {LinkComponent} from '../../utils/link/link.component';
import {AUTH_CONST} from '../../../../modules/auth/shared/constant/auth.constant';
import {SharedModule} from '../../../../shared/shared.module';
import {InputLabelComponent} from '../input-label/input-label.component';
import {ErrorMessageComponent} from '../error-message/error-message.component';

@Component({
  selector: 'app-password-form',
  standalone: true,
  imports: [
    CommonModule,
    LinkComponent,
    SharedModule,
    InputLabelComponent,
    LinkComponent,
    InputLabelComponent,
    ErrorMessageComponent
  ],
  templateUrl: './password-form.component.html',
  styleUrls: ['./password-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PasswordFormComponent implements OnInit {
  authConst = AUTH_CONST;

  @Input() formGroup: FormGroup;
  @Input() formName: string;
  @Input() errorMessage: string;
  @Input() placeHolder: string;
  @Input() forInput: string;
  @Input() label: string;

  show: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  isVisible(): void {
    this.show = !this.show;
  }

  isErrorForm(): boolean {
    return !!(this.formGroup.get(this.formName)?.touched && this.formGroup.get(this.formName)?.errors)
  }
}

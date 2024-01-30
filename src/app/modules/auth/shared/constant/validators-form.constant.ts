//export const PASSWORD_REGEX = /^(?=.*[A-Z])(?=.*[a-z])(?=.{8,}).*$/
import {AbstractControl} from '@angular/forms';

export const PASSWORD_REGEX = /^.{8,}$/

export class PasswordValidation {

  static MatchPassword(AC: AbstractControl) {
    let password = AC.get('password')?.value;
    let confirm = AC.get('confirm')?.value;

    if (password !== confirm) {
      AC.get('confirm')?.setErrors({MathPassword: true});
    }
    return null;
  }
}

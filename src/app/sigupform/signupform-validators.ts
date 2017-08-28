import {AbstractControl, FormGroup, ValidationErrors} from '@angular/forms';
import {current} from 'codelyzer/util/syntaxKind';

export class SignupformValidators {

  static validateExistingAsync(control: AbstractControl): Promise<ValidationErrors | null> {
    return new Promise((resolve, reject) => {

      const currentValue = control.value as string; //geen casting nodig
      console.log('current value', currentValue);
      if (currentValue !== '12345') {
        resolve({wrongCurrentPassword: true});
      } else {
        resolve(null);
      }
    });
  }

  static validateExistingPassword(control: AbstractControl): ValidationErrors | null {
    const currentValue = control.value as string;
    console.log('current value', currentValue);
    if (currentValue !== '12345') {
      return {wrongCurrentPassword: true};
    }
    return null;
  }

  static validateNewChosenPassword(control: AbstractControl): ValidationErrors | null {

    const newChosen = control.get('newPassword').value as string;
    const confirmation = control.value['confirmPassword'] as string;

    if (newChosen !== confirmation) {
      return {notSameNewPassword: true};
    }


  }

}

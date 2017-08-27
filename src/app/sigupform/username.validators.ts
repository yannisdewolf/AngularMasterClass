import {AbstractControl, ValidationErrors} from '@angular/forms';

export class UsernameValidators {

  static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
    if ((control.value as string).indexOf(' ') >= 0) {
      return {
        cannotContainSpace: true
      };
    }

    return null;
  }

  static shouldBeUnique(control: AbstractControl): ValidationErrors | null {

    //async operation, simulate call to server
    setTimeout(() => {
      if (control.value === 'yannis') {
        return {
          shouldBeUnique: true
        };
      }
      return null;
    }, 2000);


    return null;

  }

}

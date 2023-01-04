import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ValidatorsService {
  cityPattern: string = '[a-zA-Z]';

  constructor() {}

  validatePasswords(field1: string, field2: string) {
    return (formGroup: AbstractControl): ValidationErrors | null => {
      const pass1 = formGroup.get(field1)?.value;
      const pass2 = formGroup.get(field2)?.value;
      console.log(pass1, pass2);

      if (pass1 !== pass2) {
        formGroup.get(field2)?.setErrors({ notsame: true });
        return { notsame: true };
      }
      return null;
    };
  }
}

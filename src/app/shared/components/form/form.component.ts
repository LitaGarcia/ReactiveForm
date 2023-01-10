import { Component, Input, ViewChild } from '@angular/core';
import json from '../../../countries/countries.json';
import {
  FormGroup,
  Validators,
  FormBuilder,
  FormArray,
  FormControl,
} from '@angular/forms';
import User from '../../../classes/user';
import Country from '../../../interfaces/country';
import { ValidatorsService } from '../../services/validators.service';
import { UsersService } from '../../services/users.service';
import { EmailValidatorService } from '../../services/email-validator.service';
import { UsernameValidatorService } from '../../services/username-validator.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  countries!: Country[];
  selectedCountry!: Country;
  userToUpdate!: User;

  newUserForm: FormGroup = this.fb.group(
    {
      username: [
        //how to make a conditional as a first value ,
        [Validators.required, Validators.minLength(3)],
        // this.usernameValidator,
      ],
      password: [, [Validators.required, Validators.minLength(6)]],
      confirmatedPassword: [, [Validators.required]],
      email: [
        ,
        [
          Validators.required,
          Validators.pattern(this.validatorsService.emailPattern),
        ],
        [this.emailValidator],
      ],
      subscription: [],
      country: [],
      city: [],
    },
    {
      validators: [
        this.validatorsService.validatePasswords(
          'password',
          'confirmatedPassword'
        ),
      ],
    }
  );

  //TODO: Component Wrapper
  get emailErrorMsg(): string {
    const errors = this.newUserForm.get('email')?.errors;
    if (errors?.['required']) {
      return 'Email is required';
    } else if (errors?.['pattern']) {
      return 'The field should have an email format';
    } else if (errors?.['existingEmail']) {
      return 'The email already exists';
    }
    return '';
  }

  constructor(
    private fb: FormBuilder,
    private validatorsService: ValidatorsService,
    private usersService: UsersService,
    private emailValidator: EmailValidatorService,
    private usernameValidator: UsernameValidatorService
  ) {
    this.countries = json;
  }

  validateField(field: string) {
    return (
      this.newUserForm.get(field)?.invalid &&
      this.newUserForm.get(field)?.touched
    );
  }

  onSubmit() {
    console.log(this.newUserForm.value);
    if (this.newUserForm.valid) {
      this.usersService
        .addNewUser(this.newUserForm.value)
        .subscribe((resp) => console.log(resp));
    }
    if (this.userToUpdate) {
      //TODO: Http update user
      //
    }
    this.newUserForm.markAllAsTouched();
  }

  getUserToUpdate(e: User) {
    this.userToUpdate = e;
  }
}

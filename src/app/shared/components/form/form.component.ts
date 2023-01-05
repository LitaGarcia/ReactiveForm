import { Component, ViewChild } from '@angular/core';
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

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  newUserForm: FormGroup = this.fb.group(
    {
      username: [, [Validators.required, Validators.minLength(3)]],
      password: [, [Validators.required, Validators.minLength(6)]],
      confirmatedPassword: [, [Validators.required]],
      email: [
        ,
        [Validators.required, Validators.pattern(this.vs.emailPattern)],
        [this.emailValidator],
      ],
      subscription: [],
      country: [],
      city: [],
    },
    {
      validators: [
        this.vs.validatePasswords('password', 'confirmatedPassword'),
      ],
    }
  );

  countries!: Country[];
  selectedCountry!: Country;

  get emailErrorMsg(): string {
    const errors = this.newUserForm.get('email')?.errors;
    if (errors?.['required']) {
      return 'Email is required';
    } else if (errors?.['pattern']) {
      return 'The field should have an email format ';
    } else if (errors?.['existingEmail']) {
      return 'The email already exists';
    }
    return '';
  }

  constructor(
    private fb: FormBuilder,
    private vs: ValidatorsService,
    private usersService: UsersService,
    private emailValidator: EmailValidatorService
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
    //why?
    // this.usersService.sendNewUser(this.newUserForm.value);
    this.newUserForm.markAllAsTouched();
  }
}

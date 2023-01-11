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
import { ThisReceiver } from '@angular/compiler';

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
        ,
        [Validators.required, Validators.minLength(3)],

      ],
      password: [, [Validators.required, Validators.minLength(6)]],
      confirmatedPassword: [, [Validators.required]],
      email: [
        ,
        [
          Validators.required,
          Validators.pattern(this.validatorsService.emailPattern),
        ],
        // [this.emailValidator],
      ],
      subscription: [],
      country: [{ name: 'Spain', code: 'ES' }],
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


  ngOnInit() {}

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
    // private emailValidator: EmailValidatorService,

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
    if (this.newUserForm.valid && !this.userToUpdate) {
      this.usersService.addNewUser(this.newUserForm.value).subscribe();
    }
    if (this.userToUpdate && this.newUserForm.valid) {
      this.usersService
        .updateUser(this.newUserForm.value, this.userToUpdate.id)
        .subscribe();
        this.userToUpdate.email
    }
    
    this.newUserForm.reset();
  }

  getUserToUpdate(e: User) {
    this.userToUpdate = e;
    this.newUserForm.setValue({
      username: this.userToUpdate.username,
      password: this.userToUpdate.password,
      confirmatedPassword: this.userToUpdate.confirmatedPassword,
      email: this.userToUpdate.email,
      subscription: this.userToUpdate.subscription,
      country: this.userToUpdate.country,
      city: this.userToUpdate.city,
      // id: this.userToUpdate.id,
    });
  }
}

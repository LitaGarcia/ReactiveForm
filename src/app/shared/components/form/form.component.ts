import { Component, ViewChild } from '@angular/core';
import json from '../../../countries/countries.json';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import User from '../../../classes/user';
import Country from '../../../interfaces/country';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  newUserForm: FormGroup = this.fb.group({
    username: [, [Validators.required, Validators.minLength(3)]],
    mail: [, [Validators.required, Validators.email]],
    subscription: [true],
    country: [],
    city: [],
  });

  countries!: Country[];
  selectedCountry!: Country;

  constructor(private fb: FormBuilder) {
    this.countries = json;
  }

  createNewUser() {
    if (this.newUserForm.invalid) {
      return;
    }
    console.log(this.newUserForm.value);
  }

  validateField(field: string) {
    return (
      this.newUserForm.controls[field].errors &&
      this.newUserForm.controls[field].touched
    );
  }
}

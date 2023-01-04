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

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  newUserForm: FormGroup = this.fb.group({
    user: [, [Validators.required, Validators.minLength(3)]],
    mail: [, [Validators.required, Validators.email]],
    subscription: [],
    country: [],
    city: [, Validators.pattern(this.vs.cityPattern)],
  });

  countries!: Country[];
  selectedCountry!: Country;

  // usersList: User[] = [];

  constructor(private fb: FormBuilder, private vs: ValidatorsService) {
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

    this.newUserForm.markAllAsTouched();
  }
}

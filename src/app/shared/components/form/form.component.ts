import { Component, ViewChild } from '@angular/core';
import json from '../../../countries/countries.json';
import { NgForm, FormGroup, FormControl } from '@angular/forms';
import User from '../../../classes/user';
import Country from '../../../interfaces/country';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  newUserForm: FormGroup = new FormGroup({
    username: new FormControl(''),
  });

  countries!: Country[];
  selectedCountry!: Country;

  constructor() {
    this.countries = json;
  }

  createNewUser() {}
}

import { Component, ViewChild } from '@angular/core';
import json from '../../../countries/countries.json';
import { FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';
import User from '../../../classes/user';
import Country from '../../../interfaces/country';
import { HttpClient } from '@angular/common/http';

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
    city: [],
  });

  countries!: Country[];
  selectedCountry!: Country;


  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.countries = json;
  }

  createNewUser() {
    if (this.newUserForm.invalid) {
      this.newUserForm.markAllAsTouched();
      return;
    }
    //better with a service?
    // this.http
    //   .post('http://localhost:3000/users', this.newUserForm.value)
    //   .subscribe((resp) => console.log(resp));

    this.newUserForm.reset();
  }

  validateField(field: string) {
    return (
      this.newUserForm.controls[field].errors &&
      this.newUserForm.controls[field].touched
    );
  }

}

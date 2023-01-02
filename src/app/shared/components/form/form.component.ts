import { Component, ViewChild } from '@angular/core';
import json from '../../../countries/countries.json';
import { NgForm } from '@angular/forms';
import User from '../../../classes/user';
import Country from '../../../interfaces/country';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  @ViewChild('newUserForm') newUserForm!: NgForm;

  countries!: Country[];
  selectedCountry!: Country;
  usersList: User[] = [];
  user = new User('', '', this.selectedCountry, false, '');

  constructor() {
    this.countries = json;
  }

  handleClick() {
    this.user = new User(
      this.newUserForm.controls['username'].value,
      this.newUserForm.controls['mail'].value,
      this.newUserForm.controls['selectedCountry'].value,
      this.newUserForm.controls['subscription'].value,
      this.newUserForm.controls['city'].value
    );
    this.usersList.push(this.user);
    console.log(this.usersList);
    this.user = new User('', '', this.selectedCountry, false, '');
  }

  saveNewUser() {}
}

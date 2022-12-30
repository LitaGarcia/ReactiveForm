import { Component } from '@angular/core';
import json from '../../../countries/countries.json';

interface Country {
  name: string;
  code: string;
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  countries: Country[];
  selectedCountry?: Country;

  constructor() {
    this.countries = json;
  }
  
}

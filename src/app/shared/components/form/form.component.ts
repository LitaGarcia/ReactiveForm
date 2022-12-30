import { Component } from '@angular/core';

class Country {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
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
    this.countries = [
      new Country('Australia'),
      new Country('Brazil'),
      new Country('China'),
      new Country('Egypt'),
      new Country('France'),
      new Country('Germany'),
      new Country('India'),
      new Country('Japan'),
      new Country('Spain'),
      new Country('United States'),
    ];
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ValidatorsService {
  cityPattern: string = '[a-zA-Z]';

  constructor() {}
}

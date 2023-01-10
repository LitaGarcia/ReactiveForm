import { Injectable } from '@angular/core';
import {
  AbstractControl,
  AsyncValidator,
  ValidationErrors,
} from '@angular/forms';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UsernameValidatorService implements AsyncValidator {
  constructor(private http: HttpClient) {}
  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    const username = control.value;
    return this.http
      .get<any[]>(`http://localhost:3000/users?q=${username}`)
      .pipe(
        map((resp) => {
          return resp.length === 0 ? null : { existingUsername: true };
        })
      );
  }
}

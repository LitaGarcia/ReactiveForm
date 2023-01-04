import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import User from '../../classes/user';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
 


  constructor( private http: HttpClient) {}

  getUsersList(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:3000/users');
  }
  sendNewUser(user: User): Observable<User>{
    return this.http.post<User>('http://localhost:3000/users', user); 
  }
}
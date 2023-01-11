import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import User from '../../classes/user';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  getUsersList(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:3000/users');
  }
  addNewUser(user: User): Observable<User> {
    return this.http.post<User>('http://localhost:3000/users', user);
  }
  deleteUser(id: number): Observable<User> {
    return this.http.delete<User>(`http://localhost:3000/users/${id}`);
  }
  updateUser(user: User, id: number): Observable<User> {
    return this.http.put<User>(`http://localhost:3000/users/${id}`, user);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import User from '../../classes/user';
import { Subject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private _refreshRequired: Subject<void> = new Subject<void>();
  get RefreshRequired() {
    return this._refreshRequired;
  }
  constructor(private http: HttpClient) {}

  getUsersList(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:3000/users');
  }
  addNewUser(user: User): Observable<User> {
    return this.http.post<User>('http://localhost:3000/users', user).pipe(
      tap(() => {
        this.RefreshRequired.next();
      })
    );
  }
  deleteUser(id: number): Observable<User> {
    return this.http.delete<User>(`http://localhost:3000/users/${id}`).pipe(
      tap(() => {
        this.RefreshRequired.next();
      })
    );
  }
  updateUser(user: User, id: number): Observable<User> {
    return this.http.put<User>(`http://localhost:3000/users/${id}`, user).pipe(
      tap(() => {
        this.RefreshRequired.next();
      })
    );
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import User from '../../classes/user';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private _usersList$: Subject<User> = new Subject();
  usersListObservable$: Observable<User> = this._usersList$.asObservable();

  constructor() {}
}
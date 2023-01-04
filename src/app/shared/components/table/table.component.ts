import { Component } from '@angular/core';
import User from '../../../classes/user';
import { UsersService } from '../../services/users.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  usersList!: User;
  usersListObservable$!: Observable<User>;

  constructor(private userService: UsersService, private http: HttpClient) {}

  // ngOnInit() {
  //   this.usersListObservable$ = this.userService.usersListObservable$;
  //   this.usersListObservable$.subscribe((resp) => {
  //     this.usersList = resp;
  //     this.usersList = this.http.get('  http://localhost:3000/users');
  //   });
  // }
}

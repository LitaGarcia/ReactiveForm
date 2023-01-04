import { Component, Inject } from '@angular/core';
import User from '../../../classes/user';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UsersService } from '../../services/users.service';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  usersList: User[] = [];

  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.usersService.getUsersList().subscribe((resp: User[]) => {
      this.usersList! = resp;
    });
  }
}

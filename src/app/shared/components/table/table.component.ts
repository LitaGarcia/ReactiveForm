import { Component, Input } from '@angular/core';
import User from '../../../classes/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  constructor(private http: HttpClient) {}
  // get usersList() {
  //   return this.http.get('http://localhost:3000/users');
  // }
}

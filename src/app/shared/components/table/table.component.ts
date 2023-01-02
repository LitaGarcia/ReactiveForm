import { Component, Input } from '@angular/core';
import User from '../../../classes/user';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  @Input()
  usersList!: User[];
  prueba() {
    console.log('probando');
  }
}

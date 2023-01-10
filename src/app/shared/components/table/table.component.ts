import { Component, EventEmitter, Output } from '@angular/core';
import User from '../../../classes/user';
import { UsersService } from '../../services/users.service';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  usersList: User[] = [];
  @Output() onUserToUpdate: EventEmitter<User> = new EventEmitter<User>();

  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.usersService.getUsersList().subscribe((resp: User[]) => {
      this.usersList! = resp;
    });
  }

  deleteUser(id: number) {
    this.usersService.deleteUser(id).subscribe();
  }

  setUser(user: User) {
    const retrievedUser = this.usersList.find((u) => {
      console.log(u);
      u.id === user.id;
    });
    console.log(retrievedUser);

    this.onUserToUpdate.emit(retrievedUser);
  }
}

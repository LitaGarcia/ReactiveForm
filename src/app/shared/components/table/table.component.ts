import { Component, EventEmitter, Output } from '@angular/core';
import User from '../../../classes/user';
import { UsersService } from '../../services/users.service';
import { Subject } from 'rxjs';
import { ForwardRefHandling } from '@angular/compiler';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  usersList: User[] = [];
  @Output() onUserToUpdate: EventEmitter<User> = new EventEmitter<User>();

  constructor(private usersService: UsersService) {}

  private _refhesh: Subject<void> = new Subject<void>();
  get refresh() {
    return this._refhesh;
  }
  ngOnInit() {
    this.usersService.getUsersList().subscribe((resp: User[]) => {
      this.usersList! = resp;
    });
    this.usersService.RefreshRequired.subscribe((r) =>
      this.usersService.getUsersList().subscribe((resp: User[]) => {
        this.usersList! = resp;
      })
    );
  }

  deleteUser(id: number) {
    this.usersService.deleteUser(id).subscribe();
  }

  setUser(user: User) {
    const retrievedUser = this.usersList.find((u) => u.id === user.id);

    this.onUserToUpdate.emit(retrievedUser);
  }
}

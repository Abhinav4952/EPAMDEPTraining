import { Component, OnInit } from '@angular/core';

import { UsersService } from 'src/app/users.service';
@Component({
  selector: 'app-activateuser',
  templateUrl: './f1c1.component.html',
  styleUrls: ['./f1c1.component.css']
})
export class ActivateUsersComponent implements OnInit {

  userList = [];

  constructor(private usersService: UsersService) { }

  activateUser(userId) {
    this.usersService.users.forEach(element => {
      if (userId === element.id) {
        element.isDeleted = true;
      }
    });
  }

  ngOnInit(): void {
    this.userList = this.usersService.users;
  }
}


import { Component, OnInit } from '@angular/core';

import { UsersService } from 'src/app/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-f2c1',
  templateUrl: './f2c1.component.html',
  styleUrls: ['./f2c1.component.css']
})
export class DeleteUserComponent implements OnInit {
  userList = [];
  constructor(private usersService: UsersService, private route: Router) { }
  deactivateUser(userId) {
    for (var i = 0; i < this.usersService.users.length; i++) {
      if (userId === this.usersService.users[i].id) {
        console.log(this.usersService.users[i].name);
        this.usersService.users[i].isDeleted = false;
      }
    }
  }
  ngOnInit(): void {
    this.userList = this.usersService.users;
  }
}


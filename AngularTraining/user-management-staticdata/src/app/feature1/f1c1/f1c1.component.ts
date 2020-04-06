import { Component, OnInit } from '@angular/core';

import { UsersService } from 'src/app/users.service';
@Component({
  selector: 'app-f1c1',
  templateUrl: './f1c1.component.html',
  styleUrls: ['./f1c1.component.css']
})
export class F1c1Component implements OnInit {

  userList = [];

  constructor(private usersService: UsersService) { }

  activateUser(userId) {
    for (var i = 0; i < this.usersService.users.length; i++) {
      if (userId === this.usersService.users[i].id) {
        console.log(this.usersService.users[i].name);
        this.usersService.users[i].isDeleted = true;

      }
    }
  }

  ngOnInit(): void {
    this.userList = this.usersService.users;
  }

}

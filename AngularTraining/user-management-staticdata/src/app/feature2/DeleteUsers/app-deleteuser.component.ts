import { Component, OnInit } from '@angular/core';

import { UsersService } from 'src/app/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deleteuser',
  templateUrl: './f2c1.component.html',
  styleUrls: ['./f2c1.component.css']
})
export class DeleteUserComponent implements OnInit {
  userList = [];
  constructor(private usersService: UsersService, private route: Router) { }
  deactivateUser(userId) {
    
    this.usersService.users.forEach(element => {
      if (userId === element.id) {
        console.log(element.name);
        element.isDeleted = false;
      }
    });
  }
  ngOnInit(): void {
    this.userList = this.usersService.users;
  }
}


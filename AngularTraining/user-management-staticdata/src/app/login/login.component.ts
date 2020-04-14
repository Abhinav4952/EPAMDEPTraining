import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private usersService: UsersService, private router: Router) { }

  userName = 'Hello';
  usersList = [];
  beUser = [];
  ngOnInit(): void {
    this.usersList = this.usersService.users;
    this.usersService.cast.subscribe(userr => this.beUser = userr);
  }

}

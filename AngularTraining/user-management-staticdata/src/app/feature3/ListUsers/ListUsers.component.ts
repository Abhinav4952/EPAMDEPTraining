import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listusers',
  templateUrl: './f3c1.component.html',
  styleUrls: ['./f3c1.component.css']
})
export class ListUsersComponent implements OnInit {

  usersList = [];

  constructor(private usersService: UsersService, private router: Router) { }

  ngOnInit(): void {
    this.usersList = this.usersService.users;
  }

  showDetails(id){
    this.router.navigate(['feature3', id]);
  }

}

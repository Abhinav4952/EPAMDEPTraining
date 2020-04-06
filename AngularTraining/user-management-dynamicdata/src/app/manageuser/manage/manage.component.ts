import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {

  usersList = [];
  usersListnode: Observable<any>;
  userListnew;
  constructor(private usersService: UsersService, private router: Router) { }

  ngOnInit(): void {

    this.usersList = this.usersService.users;
    this.usersListnode = this.usersService.getUsers();
    this.usersService.getUsers().subscribe(
      (result) => {
        this.usersList = result as any;
        console.log('Result: Get Users API - ', result);
        console.log(this.usersList);
      },
      (error) => {
        console.log('Error: Get Users API - ', error);
      },
      () => {
        console.log('Complete: Get Users API');
      }
    );
    console.log(this.usersListnode);
  }

  showDetails(id) {
    this.router.navigate(['manage', id]);
  }

  editDetails(id) {
    this.router.navigate(['manage/edit/', id]);
  }

  createUser() {
    console.log("Navigation starts");
    this.router.navigate(['manage/create']);
  }
}


import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-deactivate',
  templateUrl: './deactivate.component.html',
  styleUrls: ['./deactivate.component.css']
})

export class DeactivateComponent implements OnInit {

  userList=[];
  usersListnew = [];
  buttondisplay:boolean;
  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.userList = this.usersService.users;
    this.buttondisplay=false;

    this.usersService.getUsers().subscribe(
      (result) => {
        this.usersListnew = result as any;
        console.log('Result: Get Users API - ', result);
        console.log(this.usersListnew);
        this.buttondisplay=true;
      },
      (error) => {
        console.log('Error: Get Users API - ', error);
      },
      () => {
        console.log('Complete: Get Users API');
      }

    );
  }

  showDetails(userId){
    console.log(userId);
    this.usersService.updateUser(
      {
        
        id: userId,
        isDeleted:true
      }
    ).subscribe(
      (result) => {
        console.log('Result: Update User API - ', result);
        window.location.reload();
      },
      (error) => {
        console.log('Error: Update User API - ', error);
      },
      () => {
        console.log('Complete: Update User API');
      }
    );
  }
}


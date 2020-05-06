import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {

  userId;
  currentUser;
  updateForm: FormGroup = new FormGroup({
    password: new FormControl(''),
    age: new FormControl(''),
  });
  constructor(private route: ActivatedRoute, private userService: UsersService) { }

  ngOnInit(): void {
    const idParam = this.route.snapshot.params['id'];
    console.log(idParam);
    this.updateForm.valueChanges.subscribe((changes) => {
      console.log('Update Form valueChanges ', changes);
    });

    this.updateForm.statusChanges.subscribe((status) => {
      console.log('Update Form statusChanges ', status, this.updateForm);
    });
    this.route.params.subscribe(
      (param) => {
        this.userId = param['id'];
        this.userService.getUser(param['id']).subscribe(
          (result) => {
            this.currentUser = result;
            this.updateForm.setValue({
              password: this.currentUser.password,
              age: this.currentUser.age,
            });
            console.log('Result: Get User API - ', result);
          },
          (error) => {
            console.log('Error: Get User API - ', error);
          },
          () => {
            console.log('Complete: Get User API');
          }
        );
      }
    );
  }

  updateUser() {
    this.userService.updateUser(
      {
        ...this.updateForm.value,
        id: this.userId
      }

    ).subscribe(
      (result) => {
        console.log('Result: Update User API - ', result);
        this.updateForm.reset();
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


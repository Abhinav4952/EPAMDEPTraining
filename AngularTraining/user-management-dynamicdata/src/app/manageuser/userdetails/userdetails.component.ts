import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/users.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {

  user: any;
  singleuser;
  constructor(private route: ActivatedRoute, private usersService: UsersService) { }

  ngOnInit(): void {
    const idParam = +this.route.snapshot.params['id'];
    const stridParam = this.route.snapshot.params['id'];
    this.usersService.getUser(stridParam).subscribe(
      (result) => {
        console.log("Printing single user result");
        this.singleuser = result;
        console.log(this.singleuser);
      },
      (error) => {
        console.log("Error in getting user:- " + error)
      },
      () => {
        console.log("Complete get user API");
      }
    );
    this.route.params.subscribe(
      (param) => {
        this.usersService.getUser(param['id']).subscribe(
          (result) => {
            console.log("Printing single user result");
            this.singleuser = result;
            console.log(this.singleuser);
          },
          (error) => {
            console.log("Error in getting user:- " + error)
          },
          () => {
            console.log("Complete get user API");
          }
        );

      }
    );
  }
}


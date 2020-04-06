import { Component } from '@angular/core';

import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  feature = 'home';
  loggedinUser = 'Current User';
  constructor( private userService: UsersService) { }

  ngOnInit() {
    this.loggedinUser = this.userService.currentUser;
    this.userService.userChanged.subscribe((userName) => {
      this.loggedinUser = userName;
    });
  }

}


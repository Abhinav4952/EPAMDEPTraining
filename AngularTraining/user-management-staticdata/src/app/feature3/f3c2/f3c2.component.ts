import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-f3c2',
  templateUrl: './f3c2.component.html',
  styleUrls: ['./f3c2.component.css']
})
export class F3c2Component implements OnInit {

  user: any;

  constructor(private route: ActivatedRoute, private usersService: UsersService) { }

  ngOnInit(): void {
    const idParam = +this.route.snapshot.params['id'];
    this.user = this.usersService.users.find((u) => u.id === idParam);

    this.route.params.subscribe(
      (param) => {
        this.user = this.usersService.users.find((u) => u.id === +param['id']);
      }
    );
  }
}


import { Injectable, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  currentUser = '';

  userChanged: EventEmitter<string> = new EventEmitter();
  userListChanged:EventEmitter<any> = new EventEmitter();
  
  users = [
    { id: 1, name: 'User 1',lastName:'chal', login: 'user1', age: 25,password:'123',isDeleted:true },
    { id: 2, name: 'User 2',lastName:'chal', login: 'user1', age: 25,password:'123',isDeleted:true  },
    { id: 3, name: 'User 3',lastName:'chal', login: 'user1', age: 25,password:'123',isDeleted:false  },
    { id: 4, name: 'User 4',lastName:'chal', login: 'user1', age: 25,password:'123',isDeleted:true  },
    { id: 5, name: 'User 5',lastName:'chal', login: 'user1', age: 25,password:'123',isDeleted:true  },
    { id: 6, name: 'User 6',lastName:'chal', login: 'user1', age: 25,password:'123',isDeleted:true  },
    { id: 7, name: 'User 7',lastName:'chal', login: 'user1', age: 25,password:'123',isDeleted:true  },
    { id: 8, name: 'User 8',lastName:'chal', login: 'user1', age: 25,password:'123',isDeleted:true  }
  ];  
  userBeChanged=new BehaviorSubject<any>(this.users);
  cast=this.userBeChanged.asObservable();
  constructor() { }
  deactivateUser(newUser){
    this.userBeChanged.next(newUser);
  }
  
}

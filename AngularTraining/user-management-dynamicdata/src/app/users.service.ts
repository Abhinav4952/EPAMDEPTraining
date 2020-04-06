import { Injectable, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient, HttpEventType } from '@angular/common/http';

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
  constructor(private http: HttpClient) { }

  
  getUsers() {
    return this.http.get<any[]>('http://localhost:8080/users');
  }
  getUser(id: string) {
    return this.http.get('http://localhost:8080/users/'+ id);
  }
  updateUser(user: Partial<User>) {
    return this.http.put('http://localhost:8080/users/' + user.id, {
      password: user.password,
      age: user.age,
      isDeleted: user.isDeleted
    });
 }
  createUser(user: User) {
    return this.http.post('http://localhost:8080/users', user);
  }
}
interface User {
  id?: string;
  firstName: string;
  lastName: string;
  age: number;
  login: string;
  password: string;
  isDeleted?: boolean;
}


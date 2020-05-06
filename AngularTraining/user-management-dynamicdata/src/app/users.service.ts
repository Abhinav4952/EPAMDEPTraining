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


import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private readonly API='http://localhost:8080/users';
  // private readonly API='assets/users.json';
  constructor(private httpClient: HttpClient) { }
    list () {
      return this.httpClient.get<User[]>(this.API);
      // return ;
    }
}

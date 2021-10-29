import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private readonly API='http://localhost:8080/';
  // private readonly API='assets/users.json';
  constructor(private httpClient: HttpClient) { }
    /**
     *
     * @returns
     */
    list () {
      return this.httpClient.get<User[]>(this.API + 'users');
    }
    view (id: string) {
      return this.httpClient.get<User[]>(this.API + 'users/' +id);
    }
    addUser(userObj:any){
      return this.httpClient.post(this.API + 'users', userObj);
    }
    editUser(userObj:any,id: string){
      return this.httpClient.put(this.API + 'users/' + id, userObj);
    }
    delUser(id:string){
      return this.httpClient.delete(this.API + 'users/' + id);
    }
}

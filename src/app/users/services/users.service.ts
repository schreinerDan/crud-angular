import { Observable } from 'rxjs';
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
    public list() : Observable<User[]>  {
      return this.httpClient.get<User[]>(this.API + 'users');
    }

    public find():Observable<any>   {
      return this.httpClient.get<User[]>(this.API + 'users');
    }
    public view (id: string): Observable<User> {
      return this.httpClient.get<User>(this.API + 'users/' +id);
    }
    public addUser(userObj:any):Observable<User>{
      return this.httpClient.post<User>(this.API + 'users', userObj);
    }
    public editUser(userObj:any,id: string) : Observable<User>{
      return this.httpClient.put<User>(this.API + 'users/' + id, userObj);
    }
    public delUser(id:string) :Observable<void>{
      return this.httpClient.delete<void>(this.API + 'users/' + id);
    }

}

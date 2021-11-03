import { Observable } from 'rxjs';
import { UsersService } from './../services/users.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

   public usersF: User[]=[];
   public displayedColumns = ['id','username','is_enabled','register_date','name','surname','email','actions'];

  constructor(private userServices:UsersService) {


   }


   ngOnInit(): void {
    this.getAllUsers();
  }

  public getAllUsers():void{
    this.userServices.find().subscribe(
      (response: User[])=>{
        this.usersF = response;
      }
    );
  }
  public searchUsers(key: string): void{
    console.log(key);
    const result: User[] =[];
    for(const user of this.usersF){
      if(user.name.toLowerCase().indexOf(key.toLowerCase())!== -1 ||
         user.username.toLowerCase().indexOf(key.toLowerCase())!== -1 ||
         user.email.toLowerCase().indexOf(key.toLowerCase())!== -1) {
        result.push(user);

      }
    }

    this.usersF = result;
    if (result.length ===0 || !key)
    {
        this.getAllUsers();
    }

  }

}

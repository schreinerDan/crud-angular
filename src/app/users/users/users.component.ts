
import { Observable } from 'rxjs';
import { UsersService } from './../services/users.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { DIR_DOCUMENT_FACTORY } from '@angular/cdk/bidi/dir-document-token';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  hidden = false;


   public users: User[]=[];
   public displayedColumns = ['id','username','password','is_enabled','register_date','name','surname','email','phone','actions'];

  constructor(private userServices:UsersService) {


   }


   ngOnInit(): void {
    this.getAllUsers();
  }

  public getAllUsers():void{
    this.userServices.find().subscribe(
      (response: User[])=>{
        this.users = response;
      }
    );
  }
  public toggleDuplicatedFilter() {
    this.hidden = !this.hidden;

    if(this.hidden==true){
      this.filterByDuplicate();
    }
    else{
      this.getAllUsers();
    }

  }

  public cleanList(){
    this.users = [];
  }
  public filterByDuplicate(){
    const usersDuplicated: User[] = [];
    this.users.forEach((item) => {
      if (this.users.filter(i => i.name === item.name).length > 1 &&
          this.users.filter(i => i.username === item.username).length > 1) {

            usersDuplicated.push(item);
      }

    });

    this.users = usersDuplicated;

  }

  public searchUsers(key: string): void{
    console.log(key);
    const result: User[] =[];
    for(const user of this.users){
      if(user.name.toLowerCase().indexOf(key.toLowerCase())!== -1 ||
         user.surname.toLowerCase().indexOf(key.toLowerCase())!== -1 ||
         user.username.toLowerCase().indexOf(key.toLowerCase())!== -1 ||
         user.email.toLowerCase().indexOf(key.toLowerCase())!== -1) {
        result.push(user);

      }
    }

    this.users = result;
    if (result.length ===0 || !key)
    {
        this.getAllUsers();
    }

  }

}


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

   public hidden = false;
   public hasDuplicated = false;
   public users: User[]=[];
   public displayedColumns = ['id','username','password','is_enabled','register_date','name','surname','email','phone','actions'];

  constructor(private userServices:UsersService) {


   }


   ngOnInit(): void {
    this.getAllUsers();
  }

  public toggleDuplicatedFilter():void {

    this.hidden = !this.hidden;

    if(this.hidden==true){
      this.filterByDuplicate();
    }else{
      this.getAllUsers();
    }

  }

  public clearList(){
    this.users = [];
    this.hasDuplicated=false;
  }

  public filterByDuplicate(): void{
    const usersDuplicated: User[] = [];
    this.users.forEach((item) => {
      if (this.users.filter(i => i.name === item.name).length > 1 &&
          this.users.filter(i => i.username === item.username).length > 1) {
            usersDuplicated.push(item);
      }

    });

    this.hasDuplicated = usersDuplicated.length==0 ? false : true;

    this.users = this.hasDuplicated ? usersDuplicated : this.users;

  }


  public getAllUsers():void{
    this.hasDuplicated=false;
    this.userServices.find().subscribe(
      (response: User[])=>{
        this.users = response;
      }
    );
  }



  public cleanList(){
    this.users = [];
    this.hasDuplicated=false;
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

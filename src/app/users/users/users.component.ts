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
  //  userServices:UsersService;
   //responseUser: ResponseUser;
   public users : Observable<User[]> ;
   public displayedColumns = ['id','username','is_enabled','register_date','name','surname','email'];

  constructor(private userServices:UsersService) {
    //  this.userServices = new UsersService();
    this.users = this.userServices.list();

   }

  ngOnInit(): void {

    // this.userService.getUsers()
    // .subscribe(res => this.responseUser = res)
  }

}

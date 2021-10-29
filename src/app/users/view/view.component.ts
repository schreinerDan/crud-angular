import { UsersService } from './../services/users.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  userId: string ='';
  userDetails: any;
  constructor(private usersService: UsersService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      data =>{
        this.userId = data.id
      }
    );
      this.usersService.view(this.userId).subscribe(
        data =>{
          this.userDetails=data;
          // console.log(data);
        }
      )
  }

}

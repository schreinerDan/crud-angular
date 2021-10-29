import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {

  userId: string ='';
  userDetails: any;
  constructor(private usersService: UsersService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      data =>{
        this.userId = data.id
      }
    );
    if(this.userId!=''){


      this.usersService.view(this.userId)
      .toPromise()
      .then(
        data =>{
          this.userDetails=data;
          Object.assign(this.userDetails,data);
          this.usersService.delUser(this.userId).subscribe(data=>{
            console.log(data);
          });
        }
      )
      .catch(err =>{
        console.log(err);
      })
    }
  }

}

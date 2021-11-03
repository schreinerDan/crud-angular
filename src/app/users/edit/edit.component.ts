import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  userId: string ='';
  userDetails: any;
  hide:boolean = true;
  enable:boolean=true;
  dataLoaded:boolean=false;
  editUserForm:FormGroup =new FormGroup({});

  constructor(private usersService: UsersService,
     private activatedRoute: ActivatedRoute,
     private fb:FormBuilder,
     private router: Router) { }

  ngOnInit(): void {
    this.dataLoaded = false;
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
          this.dataLoaded=true;
          this.editUserForm =this.fb.group({
            'username': new FormControl(this.userDetails.username),
            'password': new FormControl(this.userDetails.password),
            'is_enabled': new FormControl(this.userDetails.is_enabled),
            'register_date': new FormControl(this.userDetails.register_date),
            'name': new FormControl(this.userDetails.name),
            'surname': new FormControl(this.userDetails.surname),
            'email': new FormControl(this.userDetails.email),
            'phone': new FormControl(this.userDetails.phone)

          });
        }
      )
      .catch(err =>{
        console.log(err);
      })
    }
  }
  updateUser(id:string){
    this.usersService.editUser(this.editUserForm.value,id).subscribe(data =>{
      console.log("updated");
      alert('Usuário Atualizado');
      this.router.navigateByUrl('/users');
    },
    err=>{
      console.log(err);
    });

  }

}

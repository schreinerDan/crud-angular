import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../services/users.service';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  addUserForm:FormGroup =new FormGroup({});
  hide:boolean = true;
  enable:boolean=true;
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  constructor(private fb:FormBuilder,private usersService: UsersService) { }

  ngOnInit(): void {
      // this.addUserForm= new FormGroup({});
    this.addUserForm =this.fb.group({
      'username': new FormControl(''),
      'password': new FormControl(''),
      'is_enabled': new FormControl(false),
      'register_date': new FormControl(''),
      'name': new FormControl(''),
      'surname': new FormControl(''),
      'email': new FormControl('')

    });
  }

  createUser(){
    this.usersService.addUser(this.addUserForm.value).subscribe(data =>{
      console.log("created");
    },
    err=>{
      console.log(err);
    });

    console.log(this.addUserForm.value);
  }

}

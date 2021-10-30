import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../services/users.service';
import { ConfirmedValidator } from './confirmed.validator';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  addUserForm:FormGroup =new FormGroup({});
  hide:boolean = true;
  enable:boolean=true;


  constructor(private fb:FormBuilder,private usersService: UsersService) { }

  ngOnInit(): void {
      // this.addUserForm= new FormGroup({});
    this.addUserForm =this.fb.group({
      'username': new FormControl(''),
      'password': new FormControl('',[Validators.required]),
      'confirmPassword': new FormControl('',[Validators.required]),
      'is_enabled': new FormControl(true),
      'register_date': new FormControl(new Date()),
      'name': new FormControl(''),
      'surname': new FormControl(''),
      'email': new FormControl('',[
        Validators.required,
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")])

    }, {
      validator: ConfirmedValidator('password', 'confirmPassword')
    });
  }
  get f(){
    return this.addUserForm.controls;
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

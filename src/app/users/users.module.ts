import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule} from '@angular/material/card';

import { AddComponent } from './add/add.component';
import { UserService } from './user.service';
import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users/users.component';
import { ViewComponent } from './view/view.component';



@NgModule({
  declarations: [
    UsersComponent,
    AddComponent,
    ViewComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    MatTableModule,
    MatCardModule
  ],
  providers:[
    UserService
  ]
})
export class UsersModule { }

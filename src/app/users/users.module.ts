import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import {MatBadgeModule} from '@angular/material/badge';
import { RouterModule } from '@angular/router';

import { AddComponent } from './add/add.component';
import { DeleteComponent } from './delete/delete.component';
import { EditComponent } from './edit/edit.component';
import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users/users.component';
import { ViewComponent } from './view/view.component';
import { MatButtonModule } from '@angular/material/button';







@NgModule({
  declarations: [
    UsersComponent,
    ViewComponent,
    EditComponent,
    DeleteComponent,
    AddComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UsersRoutingModule,
    MatTableModule,
    MatCardModule,
    RouterModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonToggleModule,
    MatIconModule,
    MatButtonModule

  ],
  providers:[

  ]
})
export class UsersModule { }

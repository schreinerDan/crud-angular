import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddComponent } from './add/add.component';
import { UsersComponent } from './users/users.component';
import { ViewComponent } from './view/view.component';


const routes: Routes = [
  { path:'', component: UsersComponent},
  { path:'/add', component: AddComponent},
  { path:'/view', component: ViewComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }

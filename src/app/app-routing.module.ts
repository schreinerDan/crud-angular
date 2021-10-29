import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddComponent } from './users/add/add.component';
import { DeleteComponent } from './users/delete/delete.component';
import { EditComponent } from './users/edit/edit.component';
import { UsersComponent } from './users/users/users.component';
import { ViewComponent } from './users/view/view.component';

const routes: Routes = [

  {path:'users/add',component:AddComponent},
  {path:'users/view/:id',component:ViewComponent},
  {path:'users/users',component:UsersComponent},
  {path:'users/edit/:id',component:EditComponent},
  {path:'users/delete/:id',component:DeleteComponent},
  { path:'users',
    loadChildren: ()=> import('./users/users.module').then(m => m.UsersModule) },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

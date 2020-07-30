import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserListComponent} from "./users/user-list/user-list.component";
import {GroupListComponent} from "./groups/group-list/group-list.component";
import {UserAddComponent} from "./users/user-add/user-add.component";


const routes: Routes = [
  {path: 'users', component: UserListComponent},
  {path: 'users/add', component: UserAddComponent},
  {path: 'groups', component: GroupListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListUsersComponent } from './ListUsers/ListUsers.component';
import { UserInfoComponent } from './UserInfo/UserInfo.component';
import { RouterModule, Routes } from '@angular/router';

const feature3Routes: Routes = [
  {
      path: '', component: ListUsersComponent, 
      children: [
          { path: ':id', component: UserInfoComponent }
      ]
  },
];

@NgModule({
  declarations: [ListUsersComponent, UserInfoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(feature3Routes)
  ],
  exports: [ListUsersComponent, UserInfoComponent]
})
export class UserListingModule { }

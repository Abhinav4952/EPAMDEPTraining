import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListUsersComponent } from './ListUsers/app-listusers.component';
import { UserInfoComponent } from './UserInfo/app-userinfo.component';
import { RouterModule, Routes } from '@angular/router';

const UserListingRoutes: Routes = [
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
    RouterModule.forChild(UserListingRoutes)
  ],
  exports: [ListUsersComponent, UserInfoComponent]
})
export class UserListingModule { }

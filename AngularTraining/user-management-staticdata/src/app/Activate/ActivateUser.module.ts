import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivateUsersComponent } from './ActivateUser/app-activateuser.component';

import { DeletedUsersPipe } from './deleted-users.pipe';




@NgModule({
  declarations: [ActivateUsersComponent, DeletedUsersPipe],
  imports: [
    CommonModule
  ],
  exports: [ActivateUsersComponent]
})
export class ActivateUserModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteUserComponent } from './DeleteUsers/DeleteUser.component';

import { ActiveUsersPipe } from './active-users.pipe';




@NgModule({
  declarations: [DeleteUserComponent, ActiveUsersPipe],
  imports: [
    CommonModule

  ],
  exports: [DeleteUserComponent]
})
export class Feature2Module { }


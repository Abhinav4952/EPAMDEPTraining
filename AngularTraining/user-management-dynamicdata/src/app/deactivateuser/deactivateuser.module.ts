import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeactivateComponent } from './deactivate/deactivate.component';
import { DeletedUsersPipe } from './deleted-users.pipe';

@NgModule({
  declarations: [DeactivateComponent,DeletedUsersPipe],
  imports: [
    CommonModule
  ]
})

export class DeactivateuserModule { }


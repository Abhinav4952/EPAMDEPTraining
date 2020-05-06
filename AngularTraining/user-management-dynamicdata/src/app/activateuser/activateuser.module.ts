import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivateComponent } from './activate/activate.component';
import { ActiveUsersPipe } from './active-users.pipe';

@NgModule({
  declarations: [ActivateComponent,ActiveUsersPipe],
  imports: [
    CommonModule
  ]
})

export class ActivateuserModule { }


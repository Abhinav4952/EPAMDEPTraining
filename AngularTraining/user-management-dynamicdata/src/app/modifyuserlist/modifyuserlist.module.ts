import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EdituserComponent } from './edituser/edituser.component';
import { CreateuserComponent } from './createuser/createuser.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [EdituserComponent, CreateuserComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    EdituserComponent,
    CreateuserComponent
  ]
})
export class ModifyuserlistModule { }


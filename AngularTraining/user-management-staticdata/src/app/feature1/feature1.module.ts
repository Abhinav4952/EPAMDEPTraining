import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { F1c1Component } from './f1c1/f1c1.component';

import { DeletedUsersPipe } from './deleted-users.pipe';




@NgModule({
  declarations: [F1c1Component, DeletedUsersPipe],
  imports: [
    CommonModule
  ],
  exports: [F1c1Component]
})
export class Feature1Module { }

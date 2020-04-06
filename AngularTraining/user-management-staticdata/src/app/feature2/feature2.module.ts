import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { F2c1Component } from './f2c1/f2c1.component';

import { ActiveUsersPipe } from './active-users.pipe';




@NgModule({
  declarations: [F2c1Component, ActiveUsersPipe],
  imports: [
    CommonModule

  ],
  exports: [F2c1Component]
})
export class Feature2Module { }


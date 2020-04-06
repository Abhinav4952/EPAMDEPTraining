import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { F3c1Component } from './f3c1/f3c1.component';
import { F3c2Component } from './f3c2/f3c2.component';
import { RouterModule, Routes } from '@angular/router';

const feature3Routes: Routes = [
  {
      path: '', component: F3c1Component, 
      children: [
          { path: ':id', component: F3c2Component }
      ]
  },
];

@NgModule({
  declarations: [F3c1Component, F3c2Component],
  imports: [
    CommonModule,
    RouterModule.forChild(feature3Routes)
  ],
  exports: [F3c1Component, F3c2Component]
})
export class Feature3Module { }

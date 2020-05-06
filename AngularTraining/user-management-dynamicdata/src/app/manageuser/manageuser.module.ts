import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageComponent } from './manage/manage.component';
import { RouterModule, Routes } from '@angular/router';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { CreateuserComponent } from '../modifyuserlist/createuser/createuser.component';
import { EdituserComponent } from '../modifyuserlist/edituser/edituser.component';
import { ModifyuserlistModule } from '../modifyuserlist/modifyuserlist.module';

const feature3Routes: Routes = [
  {
    path: '', component: ManageComponent,
    children: [
      { path: 'create', component: CreateuserComponent },
      { path: ':id', component: UserdetailsComponent },
      { path: 'edit/:id', component: EdituserComponent }

    ]
  },
];

@NgModule({
  declarations: [ManageComponent, UserdetailsComponent],
  imports: [
    CommonModule,
    ModifyuserlistModule,
    RouterModule.forChild(feature3Routes)
  ],
  exports: [ManageComponent, UserdetailsComponent]
})
export class ManageuserModule { }


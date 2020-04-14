import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeletedUsersPipe } from './deleted-users.pipe';
import { ActivateUsersComponent } from './ActivateUser/ActivateUser.component';
@NgModule({
    declarations: [ActivateUsersComponent, DeletedUsersPipe],
    imports: [
        CommonModule
    ],
    exports: [ActivateUsersComponent]
})
export class Feature1Module { }


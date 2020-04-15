import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ActivateUsersComponent } from './Activate/ActivateUser/app-activateuser.component';
import { DeleteUserComponent } from './feature2/DeleteUsers/app-deleteuser.component';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'activateuser', component: ActivateUsersComponent },
    { path: 'deleteuser', component: DeleteUserComponent },
    {
        path: 'userlisting', 
        loadChildren: ()=> import('./feature3/UserListingModule.module').then(
            (file) => file.UserListingModule
        )
    }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
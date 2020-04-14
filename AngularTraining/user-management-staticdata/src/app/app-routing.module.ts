import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ActivateUsersComponent } from './Activate/ActivateUser/ActivateUser.component';
import { DeleteUserComponent } from './feature2/DeleteUsers/DeleteUser.component';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'feature1', component: ActivateUsersComponent },
    { path: 'feature2', component: DeleteUserComponent },
    {
        path: 'feature3', 
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
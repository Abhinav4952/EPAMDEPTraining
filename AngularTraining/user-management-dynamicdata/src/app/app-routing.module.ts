import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ActivateComponent } from './activateuser/activate/activate.component';
import { DeactivateComponent } from './deactivateuser/deactivate/deactivate.component';


const appRoutes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'activate', component: ActivateComponent },
    { path: 'deactivate', component: DeactivateComponent },
    {
        path: 'manage',
        loadChildren: () => import('./manageuser/manageuser.module').then(
            (file) => file.ManageuserModule
        )
    }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}


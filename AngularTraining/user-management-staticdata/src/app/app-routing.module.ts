import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { F1c1Component } from './feature1/f1c1/f1c1.component';
import { F2c1Component } from './feature2/f2c1/f2c1.component';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'feature1', component: F1c1Component },
    { path: 'feature2', component: F2c1Component },
    {
        path: 'feature3', 
        loadChildren: ()=> import('./feature3/feature3.module').then(
            (file) => file.Feature3Module
        )
    }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
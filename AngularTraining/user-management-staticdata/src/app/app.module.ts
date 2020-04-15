import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { ActivateUserModule } from './Activate/ActivateUser.module';
import { DeleteModule } from './feature2/feature2.module';

import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    ActivateUserModule,
    DeleteModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


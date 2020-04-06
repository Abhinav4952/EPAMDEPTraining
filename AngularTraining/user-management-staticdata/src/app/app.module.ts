import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { Feature1Module } from './feature1/feature1.module';
import { Feature2Module } from './feature2/feature2.module';

import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    Feature1Module,
    Feature2Module,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


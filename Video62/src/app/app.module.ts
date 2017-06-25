
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app.routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent  
  ],
  // Segundo passo: Remova todos os imports do módulo que utilizará o loadChildren
  imports: [
    BrowserModule,
    AppRoutingModule
  ], 
  bootstrap: [AppComponent]
})
export class AppModule { }

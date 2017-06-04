import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {MeuPrimeiroComponent} from './meu-primeiro/meu-primeiro.component';
import { ComponenteAutomaticoComponent } from './componente-automatico/componente-automatico.component';

@NgModule({
  declarations: [
    AppComponent,
    MeuPrimeiroComponent,
    ComponenteAutomaticoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

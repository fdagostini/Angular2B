
import { CommonModule } from '@angular/common/src/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { CursosService } from './cursos/cursos.service';
import { CriarCursoModule } from './criar-curso/criar-curso.module';
import { CursosModule } from "app/cursos/cursos.module";

//import { CriarCursoComponent } from './criar-curso/criar-curso.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CriarCursoModule,
    CursosModule
  ],
  providers: [CursosService],
  bootstrap: [AppComponent]
})
export class AppModule { }

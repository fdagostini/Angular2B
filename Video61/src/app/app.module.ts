

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app.routing.module';
import { CursosComponent } from './cursos/cursos.component';
import { AlunosModule } from './alunos/alunos.module';
import { AlunoDetalheComponent } from "app/alunos/aluno-detalhe/aluno-detalhe.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    CursosComponent,
    AlunosModule,
    AlunoDetalheComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ], 
  bootstrap: [AppComponent]
})
export class AppModule { }

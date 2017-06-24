import { NgModule } from '@angular/core';

import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursosComponent } from './cursos.component';
import { CommonModule } from "@angular/common/src/common";
import { RouterModule } from '@angular/router';
import { CursosService } from './cursos.service';

// Algo importante sobre o módulo de funcionalidade, é que nos imports devemos colocar os
// imports do Angular 2 que vamos utilizar
NgModule({
    imports: [
       // BrowserModule: O BrowserModule não deve ser utilizado dentro de um módulo de funcionalidade
       // Em seu lugar deve ser usado o CommonModule
       CommonModule,
       RouterModule
    ],
    exports: [],
    declarations: [
        CursosComponent,
        CursoDetalheComponent,
        CursoNaoEncontradoComponent
    ],
    providers: [
        CursosService        
    ]
})

export class CursosModule {}
import { NgModule } from '@angular/core';
// Módulo de funcionalidade não possui bootstrap
// A diferença de um módulo de funcionalidade e um de raiz, é o CommomModule
import { CommonModule } from '@angular/common';

import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursosService } from './cursos.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CursosComponent,
    CursoDetalheComponent
  ],
  exports: [
    CursosComponent
  ],
  providers: [ CursosService ]
})

export class CursosModule { }

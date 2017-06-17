import { CursosService } from './../cursos/cursos.service';
import { CriarCursoComponent } from './criar-curso.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common/src/common";

@NgModule({
  declarations: [    
    CriarCursoComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[CriarCursoComponent],
  providers: [CursosService]
})
export class CriarCursoModule { }

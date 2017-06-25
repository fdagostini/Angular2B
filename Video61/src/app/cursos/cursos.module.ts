import { CursosRoutingModule } from './cursos.routing.module';
import { NgModule } from '@angular/core';

import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursosComponent } from './cursos.component';
import { CommonModule } from "@angular/common/src/common";
import { CursosService } from './cursos.service';

NgModule({
    imports: [       
       CommonModule,
       CursosRoutingModule
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
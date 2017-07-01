import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CursosComponent } from './cursos.component';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';

const cursosRoutes: Routes = [  
    // Terceiro passo: Deixe vazio o caminho principal do seu módulo, pois ele já foi informado 
    // completamente no app.routing.module.ts
    { path: '', component: CursosComponent },
    { path: 'naoEncontrado', component: CursoNaoEncontradoComponent },
    { path: ':id', component: CursoDetalheComponent }
     
];

@NgModule({    
    imports: [RouterModule.forChild(cursosRoutes)], 
    exports: [RouterModule]
})
export class CursosRoutingModule{
}
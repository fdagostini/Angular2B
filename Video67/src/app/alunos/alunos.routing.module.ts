import { AlunosDesactivateGuard } from './../guards/alunos-desactivate.guard';
import { CanDeactivate } from '@angular/router/src';

import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AlunosComponent } from './alunos.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';

const alunosRoutes = [    
    {path: '', component: AlunosComponent, children: [
        {path: '/novo', component: AlunoFormComponent},
        {path: '/id', component: AlunoDetalheComponent},
        {path: '/:id/editar', component: AlunoFormComponent,
            canDeactivate: [AlunosDesactivateGuard]} ]}, // Atribuindo o guarda de rotas       
]

@NgModule({
    imports: [RouterModule.forChild(alunosRoutes)],
    exports: [RouterModule]
})
export class AlunosRoutingModule {

}
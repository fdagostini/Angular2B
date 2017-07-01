import { AlunoDetalheResolver } from './guards/aluno-detalhe.resolver';
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
        {path: '/id', component: AlunoDetalheComponent,
            resolve: { aluno: AlunoDetalheResolver} // Atribuindo o Resolver
        },
        {path: '/:id/editar', component: AlunoFormComponent,
            canDeactivate: [AlunosDesactivateGuard]} ]}, 
]

@NgModule({
    imports: [RouterModule.forChild(alunosRoutes)],
    exports: [RouterModule]
})
export class AlunosRoutingModule {

}
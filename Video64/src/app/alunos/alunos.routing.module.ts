
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AlunosComponent } from './alunos.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';

const alunosRoutes = [
    // Para evitar colisão de rotas, informe a rotas na ordem que elas devem ser executadas.
    // Para criar uma rota filha, deve ser usado o "children"
    {path: '', component: AlunosComponent, children: [
        {path: '/novo', component: AlunoFormComponent},
        {path: '/id', component: AlunoDetalheComponent},
        {path: '/:id/editar', component: AlunoFormComponent} ]},
       
]

@NgModule({
    imports: [RouterModule.forChild(alunosRoutes)],
    exports: [RouterModule]
})
export class AlunosRoutingModule {

}
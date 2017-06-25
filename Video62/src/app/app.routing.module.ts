
import { AppModule } from './app.module';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ModuleWithProviders } from "@angular/core/src/metadata";
import { LoginComponent } from './login/login.component';
import { CursosModule } from './cursos/cursos.module';

const appRoutes: Routes = [
    // Primeiro passo: Inclua um novo path com o modulo que deve ser executado
    // Use o loadChildren (que significa Carregar rotas filhas) e passe o caminho completo do MÓDULO +
    // a classe que tem o módulo de funcionalidade
    { path : 'cursos', loadChildren: 'app/cursos/cursos.module#CursosModule'},
    { path : 'alunos', loadChildren: 'app/alunos/alunos.module#AlunosModule'},
    { path: '', component: HomeComponent },    
    { path: 'login', component: LoginComponent }    
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)], 
    exports: [RouterModule]
})
export class AppRoutingModule{
}
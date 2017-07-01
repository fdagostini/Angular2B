import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { CursosGuard } from './guards/cursos.guards';
import { AuthGuard } from './guards/auth.guard';
import { CanActivate } from '@angular/router/src';

import { AppModule } from './app.module';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ModuleWithProviders } from "@angular/core/src/metadata";
import { LoginComponent } from './login/login.component';
import { CursosModule } from './cursos/cursos.module';

const appRoutes: Routes = [    
    { path : 'cursos',
      loadChildren: 'app/cursos/cursos.module#CursosModule',
      canActivate: [AuthGuard],
      canActivateChild: [CursosGuard],
      canLoad: [AuthGuard]
    },
    { path : 'alunos',
      loadChildren: 'app/alunos/alunos.module#AlunosModule',
      canActivate: [AuthGuard],
      canLoad: [AuthGuard]      
    },   
    { path: 'login', component: LoginComponent },
    // Sempre crie no seu arquivo de rotas, um caminho 'vazio' 
    { path: 'home', component: HomeComponent,
      canActivate: [AuthGuard]
    },
    // Para direcionar sua rota, use o redirectTo
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    // e um caminho para rotas não encontrada. Aqui no caso, qualquer coisa (**) diferente das rotinas acima
    // caira nesse component
     { path: '**', component: PaginaNaoEncontradaComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, {useHash: true})], 
    exports: [RouterModule]
})
export class AppRoutingModule{
}
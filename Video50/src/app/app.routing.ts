import { CursosComponent } from './cursos/cursos.component';
import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ModuleWithProviders } from "@angular/core/src/metadata";

// As rotas são compostas de objetos e nós temos que declará-los;

const APP_ROUTES: Routes = [
    // Path: caminho para um determinado component
    // Se for digitado http://localhost:4200/, o HomeComponent será chamado
    {path: '', component: HomeComponent},
    // Se for digitado http://localhost:4200/login, o LoginComponent será chamado
    {path: 'login', component: LoginComponent},
    // Se for digitado http://localhost:4200/cursos, o CursosComponent será chamado
    {path: 'cursos', component: CursosComponent},
];

// ModuleWithProviders: Através dele informamos que a constante informada possui as definições
// de rotas do nosso projeto
export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
// A diferença entre uma rota de raíz e uma rota de funcionalidade, é o forRoot ou o forChild
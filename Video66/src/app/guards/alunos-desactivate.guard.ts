import { Observable } from 'rxjs/Observable';
import { AlunoFormComponent } from './../alunos/aluno-form/aluno-form.component';
import { Injectable, Component } from '@angular/core';
import { CanDeactivate } from "@angular/router/src";
import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router/src";

// Quando utilizado um guarda para desativar uma rota, é necessário
// especificar qual component será desativado
@Injectable()
export class AlunosDesactivateGuard implements CanDeactivate <AlunoFormComponent> {

    canDeactivate(
        component: AlunoFormComponent,
        route: ActivatedRouteSnapshot,    
        state: RouterStateSnapshot):
        Observable<boolean>|boolean{
           console.log('guarda de desativação');          
           return component.podeMudarRota();
        }
}  



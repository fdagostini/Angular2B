import { Observable } from 'rxjs/Observable';
import { AlunoFormComponent } from './../alunos/aluno-form/aluno-form.component';
import { Injectable, Component } from '@angular/core';
import { CanDeactivate } from "@angular/router/src";
import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router/src";
import { IFormCanDeactivate } from "app/guards/iform-candeactivate";

// Ao passar a interface, todos as classes do nosso projeto que implementarem
// a interface, passsarão por aquele método
@Injectable()
export class AlunosDesactivateGuard implements CanDeactivate <IFormCanDeactivate> {

    canDeactivate(
        component: IFormCanDeactivate,
        route: ActivatedRouteSnapshot,    
        state: RouterStateSnapshot):
        Observable<boolean>|boolean{
           console.log('guarda de desativação');          
           //return component.podeMudarRota();
           return component.podeDesativar();
        }
}  



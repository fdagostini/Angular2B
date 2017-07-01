import { AlunosService } from './../alunos.service';
import { Aluno } from './../aluno';
import { Observable } from 'rxjs/Observable';
import { RouterStateSnapshot } from '@angular/router/src';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router/src';
import { Injectable } from '@angular/core';


@Injectable()
export class AlunoDetalheResolver implements Resolve<Aluno> {
    constructor(private alunosService: AlunosService) {}
    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
        ): Observable<any>|Promise<any>|any {
            console.log('AlunoDetalheResolver')

            let id = route.params['id'];
            return this.alunosService.getAluno(id);
    }
}


import { LogService } from './../shared/log.service';

import { Injectable } from "@angular/core/";

@Injectable()
export class CursosService {

    private cursos: string[] = ['Angular 2', 'Java', 'Phonegap'];
    constructor(private logService: LogService){
        console.log('CursosService')
    }
    getCursos() {
        this.logService.consoleLog('Obtendo lista de cursos');
        return this.cursos;
    }

    addCurso(curso: string){
        /* Para não ter que ficar concatenando frases, use crases + $ {variável):
        this.logService.consoleLog('Criando um novo curso '+ curso);*/
        this.logService.consoleLog(`Criando um novo curso ${curso}`);
        this.cursos.push(curso);
      
    }
}

import { Injectable } from "@angular/core/";
import { EventEmitter } from "events";

@Injectable()
export class CursosService {
    emitirCursoCriado = new EventEmitter();
    // Quando definimos o atributo como static, significa que não precisamos que a 
    // instância dele seja realizada
    static criouNovoCurso = new EventEmitter();

    private cursos: string[] = ['Angular 2', 'Java', 'Phonegap'];
    constructor(){
        console.log('CursosService')
    }
    getCursos() {
        return this.cursos;
    }

    addCurso(curso: string){
        this.cursos.push(curso);
        this.emitirCursoCriado.emit(curso);
        CursosService.criouNovoCurso.emit(curso);
    }
}
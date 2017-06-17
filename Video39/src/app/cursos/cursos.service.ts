
import { Injectable } from "@angular/core/src/core";

@Injectable()
export class CursosService{
    getCursos(){
        return['Angular 2', 'Java', 'Phonegap'];
    }
}
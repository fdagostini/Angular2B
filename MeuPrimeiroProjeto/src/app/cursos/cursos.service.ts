import { Injectable } from '@angular/core';

@Injectable() // Anotação indicando que o serviço pode ser injetado
export class CursosService {

  constructor() { }
  
  getCursos(){
    return ['Java ', 'Angular ', 'Ext JS '];
  }
}

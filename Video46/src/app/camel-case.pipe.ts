import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelCase'
})

// O pipe precisa implementra uma interface chamada PipeTransform
// Quando implementamos essa interface, ela sobrepõe o método transform
export class CamelCasePipe implements PipeTransform {

  // O "value" são os valores a serem transformados e os "args" são os argumentos (opcional)
  // Função para deixar a primeira letra de cada palavra em maiúscula:
  transform(value: any, args?: any): any {
    let values = value.split(' ');
    let result = '';
    for (let v of values){
      result += this.capitalize(v) + ' ';
    }
    return result;
  }

  capitalize(value: string){
    return value.substr(0,1).toUpperCase() + value.substr(1).toLowerCase();    
  }
}

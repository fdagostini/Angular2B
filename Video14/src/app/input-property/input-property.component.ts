import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.css']
})
export class InputPropertyComponent implements OnInit {
  // Através do @Input nós conseguimos expor uma propriedade chamada "nome" para o seletor app-curso
  // @Input() nome: string = '';

  // Também podemos passar o properties como parâmetro, usando ela internamente uma variável normal (nomeCurso)
  // e externamente com a variável de exposição
   @Input('nome') nomeCurso: string = '';

  constructor() { }

  ngOnInit() {
  }

}

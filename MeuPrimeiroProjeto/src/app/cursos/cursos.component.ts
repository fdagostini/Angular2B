import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  // Podemos instanciar a variável por aqui, informando o que ela vai receber ou
  nomePortal: string; 
  cursos: string[] = ['Java', 'Angular', 'Ext JS'];
  // podemos iniciar ela através do construtor, usando a palavra "this"
  constructor() {      
  this.nomePortal = 'http://loiane.training';
  }
 
  ngOnInit() {
  }
} 

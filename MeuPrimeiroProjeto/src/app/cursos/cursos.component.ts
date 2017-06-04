import { Component, OnInit } from '@angular/core';

// Importação da classe
import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  // Podemos instanciar a variável por aqui, informando o que ela vai receber ou
  nomePortal: string;   
  cursos: string[]; // Deixamos o componente passando apenas o resultado
  // Declarando o serviço e adicionando o modificador de acesso (que pode ser público ou privado)
  constructor(private cursosService: CursosService) {      
  // podemos iniciar ela através do construtor, usando a palavra "this"
  this.nomePortal = 'http://loiane.training';
  this.cursos = this.cursosService.getCursos();
  
  // Criando a variável
  //var servico = new CursosService(); como temos a classe serviço, a essa variável por ser apagada.
  } 
  ngOnInit() {
  }
} 

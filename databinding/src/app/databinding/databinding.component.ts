import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {  
  url: string = 'http://loiane.com'; // Variável
  cursoAngular: boolean = true; // Expressão booleana
  urlImagem = 'http://lorempixel.com/400/200/nature/'; // Imagem

  // Metódo
  getValor(){
    return 1;
  }
  // Metódo utilizado com a expressão booleana
  getCurtirCurso(){
    return true;

  }
  constructor() { }

  ngOnInit() {
  }

}

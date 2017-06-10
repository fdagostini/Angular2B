import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  //styleUrls: ['./databinding.component.css']
  styles: [
    `
      .highligth{
       background-color: yellow;
       font-weight: bold;
                }
    
    `
          ]
})
export class DatabindingComponent implements OnInit {  
  url: string = 'http://loiane.com'; 
  cursoAngular: boolean = true; 
  urlImagem = 'http://lorempixel.com/400/200/nature/'; 

  valorAtual: string = '';
  valorSalvo = '';

  isMouseOver: boolean = false;

  getValor(){
    return 1;
  }  
  getCurtirCurso(){
    return true;

  }
  BotaoClicado(){
    alert('Botão clicado!');
  }
  
  OnKeyUp(evento: KeyboardEvent){ 
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }
  salvarValor(valor){
    this.valorSalvo = valor;

  }
  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;

  }

  constructor() { }

  ngOnInit() {
  }

}

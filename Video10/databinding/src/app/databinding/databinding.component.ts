import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {  
  url: string = 'http://loiane.com'; 
  cursoAngular: boolean = true; 
  urlImagem = 'http://lorempixel.com/400/200/nature/';

  getValor(){
    return 1;
  }  
  getCurtirCurso(){
    return true;

  }
  constructor() { }

  ngOnInit() {
  }

}

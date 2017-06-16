import { Component, OnInit, Input, Output, ViewChild, ElementRef } from '@angular/core';
import { EventEmitter } from "events";

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {
  
  @Input() valor: number = 0;
  @Output() mudouValor = new EventEmitter(); 
  
  // No ViewChild passamos qual é a variável no template que está associada ao component.
  @ViewChild('campoInput') campoValueInput: ElementRef;

  incrementa(){
    // Ao invés de utilizarmos o this.valor++, utilizamos o value++ que referencia a variável direto pelo component.
    console.log(this.campoValueInput.nativeElement.value++);    
    this.mudouValor.emit({novoValor: this.valor});
  }
  decrementa(){
    console.log(this.campoValueInput.nativeElement.value--)
    this.mudouValor.emit({novoValor: this.valor});
  }
  constructor() { }
  ngOnInit() {
  }

}

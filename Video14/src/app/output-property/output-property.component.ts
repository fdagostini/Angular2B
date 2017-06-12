import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from "events";

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {
  
  @Input() valor: number = 0;
  @Output() mudouValor = new EventEmitter(); // A classe EventEmitter é do tipo emissora de eventos, ou seja,
                                            // avisa alguém sobre um evento
  incrementa(){
    this.valor++;
    this.mudouValor.emit({novoValor: this.valor});
  }
  decrementa(){
    this.valor--;
    this.mudouValor.emit({novoValor: this.valor});
  }
  constructor() { }
  ngOnInit() {
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 valor: number = 5;

// Criada uma variável booleana com tipo False:
 deletarCiclo: boolean = false;

 mudarValor(){
   this.valor++;
 }
 // Método para destruir o ciclo; passa a variável como True:
 destruirCiclo(){
   this.deletarCiclo = true;
 }
}

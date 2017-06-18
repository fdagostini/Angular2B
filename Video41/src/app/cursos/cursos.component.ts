
import { Component, OnInit } from '@angular/core';
import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
  providers:[CursosService]
})
export class CursosComponent implements OnInit {
  curso: () => string[];

  cursos: string[] = [];
  //cursosService: CursosService;

  constructor(private cursosService: CursosService) { 
   // this.cursosService = new CursosService();
 //  this.cursosService = _cursosService;

  }

  ngOnInit() {
    this.curso = this.cursosService.getCursos;
    CursosService.criouNovoCurso.subscribe(curso => this.cursos.push(curso));
    // Podemos escrever dessa forma:
    // curso => console.log(curso)
    // Ao invés dessa:
    /*function(curso){
      console.log(curso);
    }*/

  }

}

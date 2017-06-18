
import { Component, OnInit } from '@angular/core';
import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
  providers:[CursosService]
})
export class CursosComponent implements OnInit {
  //curso: () => string[];

  cursos: string[] = [];
  //cursosService: CursosService;

  constructor(private cursosService: CursosService) { 
   // this.cursosService = new CursosService();
 //  this.cursosService = _cursosService;

  }

  ngOnInit() {
    this.curso = this.cursosService.getCursos;

  }

}

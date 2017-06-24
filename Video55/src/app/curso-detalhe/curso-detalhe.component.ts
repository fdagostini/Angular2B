import { CursosService } from './../cursos/cursos.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.css']
})
export class CursoDetalheComponent implements OnInit {

  id: number;
  inscricao: Subscription;
  curso: any;
  
  // Existe a classe Router do Angular 2, que contém todos os métodos responsáveis pelo
  // redirecionamento:
  constructor(private route: ActivatedRoute, private cursosService: CursosService, private router: Router) {    
   }

  ngOnInit() {   
    this.inscricao = this.route.params.subscribe((params: any) => {   
        this.id = params['id'];
        this.curso = this.cursosService.getCurso(this.id);
        if(this.curso == null){
          // Através do "navigate" indicamos qual rota deve ser seguida:
          this.router.navigate(['/naoEncontrado']);

        }
      }      
    );
  }
  
  ngOnDestroy(){
    this.inscricao.unsubscribe;
  }
}

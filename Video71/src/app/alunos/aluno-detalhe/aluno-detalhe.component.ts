import { AlunosService } from './../alunos.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Aluno }  from './../aluno';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css']
})
export class AlunoDetalheComponent implements OnInit, OnDestroy{
  
  aluno: Aluno;
  inscricao: Subscription;

  constructor(private route: ActivatedRoute,
  private alunosService: AlunosService) { }

  ngOnInit() {
    console.log('ngOnInit: AlunoDetalheComponent');
    this.inscricao = this.route.data.subscribe((info: {aluno : Aluno}) => {
      console.log('Recebendo o objeto Aluno do Resolver');
      // Sempre passe o mesmo atributo no Resolver e aqui no component
      this.aluno = info.aluno;
    });
  }

 ngOnDestroy(){
    this.inscricao.unsubscribe;
  }

}

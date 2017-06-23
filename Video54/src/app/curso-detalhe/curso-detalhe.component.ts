import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.css']
})
export class CursoDetalheComponent implements OnInit {

  id: string;
  inscricao: Subscription;
  
  constructor(private route: ActivatedRoute) {
    // Com esse construtor, temos uma foto apenas do primeiro parâmetro; se ele é alterado
    // nosso template não altera
   // this.id = this.route.snapshot.params['id'];
   // console.log(this.route);
   }

  ngOnInit() {
    // Subscribe se inscrevendo para receber alterações do parâmetro
    // 
    this.inscricao = this.route.params.subscribe((params: any) => {
      this.id = params ['id'];
    });
  }

  // Por boa prática, ao utilizar uma inscrição crie o metódo para se desiscrever, 
  // caso o component seja excluído
  ngOnDestroy(){
    this.inscricao.unsubscribe;
  }
}

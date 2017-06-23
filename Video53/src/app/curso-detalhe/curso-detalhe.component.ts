import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.css']
})
export class CursoDetalheComponent implements OnInit {

  id: string;

  // É possível utilizar o ActivatedRoute para obter os detalhes da rota
  constructor(private route: ActivatedRoute) {
    this.id = this.route.snapshot.params['id'];
   }

  ngOnInit() {
  }

}

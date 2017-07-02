import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  usuario: any = {
    nome: null,
    email: null
  }

  constructor(private http: Http) { }

  ngOnInit() {
  }

  onSubmit(form) {
    console.log(form);
    /* Método para passar as informações para o servidor:
       O JSON.stringify transforma as informações do JSON em string */
    this.http.post('https://httpbin.org/get', JSON.stringify(form.value))
    .map(res => res)
    .subscribe(dados => console.log(dados));
  }

  verificaValidTouched(campo) {
    return !campo.valid && campo.touched;
  }

  aplicaCssErro(campo) {
    return {
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo)
    }
  }

  consultaCEP(cep, form) {
    // Criando variável CEP e removendo quaisquer letras ou caracteres especiais
    cep = cep.replace(/\D/g, '');
    // Verificando se o campo CEP possui valor informado
    if (cep != "") {
      // Expressão regular para verificar o CEP
      var validacep = /^[0-9]{8}$/;
      // Verificando o formato do CEP
      if (validacep.test(cep)) {
        // Consulta ao WebService, mapeando os dados e recebendo as informações:
        this.resetaDadosForm(form);
        this.http.get(`//viacep.com.br/ws/${cep}/json`)
          .map(dados => dados.json())
          .subscribe(dados => this.populaDadosForm(dados, form));
      }
    }
  }

  // Método para popular os campos:
  // O problema de se usar esse método, é se o formulário tiver muitos dados,
  // teria que carregar todos os campos
  populaDadosForm(dados, formulario) {
  /*  formulario.setValue({
      nome: formulario.value.nome,
      email: formulario.value.email,
      endereco: {
        rua: dados.logradouro,
        cep: dados.cep,
        numero: '',
        complemento: dados.complemento,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      }
    });*/

    // A forma correta é utilizar o patchValue, que é uma propriedade do formulário;
    // nesse método deve ser passado apenas os campos que realmente serão preenchidos:
    formulario.form.patchValue({
      endereco: {
        rua: dados.logradouro,
        cep: dados.cep,
        complemento: dados.complemento,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      }
    });
  }
  // Método para resetar as informações do formulário:
  resetaDadosForm(formulario){
    formulario.form.patchValue({
      endereco: {
        rua: null,
        cep: null,
        complemento: null,
        bairro: null,
        cidade: null,
        estado: null
      }
    });
  }
}

// O BrowserModule prepara a aplicação para ser usada na web
import { BrowserModule } from '@angular/platform-browser';
// Indicando da onde o NgModule esta
import { NgModule } from '@angular/core';

// Import's da classe de nosso projeto
import { AppComponent } from './app.component';
import { MeuPrimeiroComponent} from './meu-primeiro/meu-primeiro.component';
import { ComponenteAutomaticoComponent } from './componente-automatico/componente-automatico.component';
import{ CursosModule } from './cursos/cursos.module';

// Declarando a classe
@NgModule({ 
  // Metadados
  // Dentro do declarations, nós listamos todos os componentes, diretivas e pipes que vamos utilizar no módulo
  declarations: [
    AppComponent,
    MeuPrimeiroComponent,
    ComponenteAutomaticoComponent    
  ],
  // Em imports, colocamos outros módulos que queremos utilizar nesse módulo
  imports: [
    BrowserModule,
    CursosModule
    ],
  // Em providers, informados quais são os serviços que ficarão disponíveis para todos os componentes declarados no módulo,
  // como por exemplo, autenticação de login, rotas. 
  providers: [],
  // O bootstrap é encontrado apenas no módulo raiz e indica qual componente deve ser iniciado ao executar a aplicação (componente
  // que vai servir de container da app ou seja, qual é o componente principal)
  bootstrap: [AppComponent]
})
export class AppModule { } //Declaração da classe

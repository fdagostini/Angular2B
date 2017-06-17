import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[fundoAmarelo]'
  // Se você quer que a diretiva seja aplicada apenas a alguma parte do código como
  // botões, components, input, paragráfo informe isso na frente do seletor. Ex: button[fundoAmarelo]
})
export class FundoAmareloDirective {

  constructor(private elementoRef: ElementRef, private renderer: Renderer) { 
    // console.log(this.elementoRef)
    // Os desenvolvedores do Angular recomendam não utilizar o nativeElement; isso porque atráves desse
    // acessamos diretamente um elemento no árvore DOW, o que pode tornar a aplicação vulneráveis a ataque.
    // this.elementoRef.nativeElement.style.backgroundColor= 'yellow';
    // A melhor prática para ser utilizada, é usar o Renderer:
    this.renderer.setElementStyle(this.elementoRef.nativeElement, 'background-color', 'yellow');

  }

}

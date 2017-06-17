import { Directive, HostListener, ElementRef, Renderer, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHighligthMouse]'
})
export class HighligthMouseDirective {
  
   // Aqui nós temos dois metódos muito parecidos, que estão alterando a propriedade do HTML:
   @HostListener('mouseenter') onMouseOver(){    
 //    this.renderer.setElementStyle(this.elementRef.nativeElement, 'background-color', 'yellow');
      this.backgroundColor = 'yellow';
  }

   @HostListener('mouseleave') onMouseLeave(){    
    // this.renderer.setElementStyle(this.elementRef.nativeElement, 'background-color', 'white');
    this.backgroundColor = 'white';
   }

  // O Angular possui o metadado HostBingind, que permite que nós façamos uma associação da nossa diretiva
  // com o HTML:
  @HostBinding('style.backgroundColor')backgroundColor: string;
    
 // Constutor para o primeiro exemplo:
//  constructor(private elementRef: ElementRef, private renderer: Renderer) { }

}

import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighligth]'
})
export class HighligthDirective {
 
   @HostListener('mouseenter') onMouseOver(){    
     this.backgroundColor = this.highLightColor;
  }

   @HostListener('mouseleave') onMouseLeave(){    
    this.backgroundColor = this.defaultColor;
   }

  @HostBinding('style.backgroundColor') backgroundColor: string;

  @Input() defaultColor: string = 'white';
  @Input ('highligth') highLightColor: string = 'yellow';
    
  constructor() { }

  ngOnInit(){
    this.backgroundColor = this.defaultColor;
  }

}

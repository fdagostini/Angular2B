import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, OnDestroy, SimpleChanges, Input } from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.css']
})
 //É uma boa prática de programação, implementar todas as interfaces dos eventos do ciclo de vida 
export class CicloComponent implements OnInit, DoCheck, AfterContentInit, AfterContentChecked, OnChanges {  

@Input() valorInicial: number = 10;  
   constructor() {
    this.log('constructor');    
  }

    ngOnChanges(){
      this.log('ngOnChanges');      
    }
  ngOnInit() {
    this.log('ngOnInit');    
  }
  ngDoCheck(){
    this.log('ngDoCheak');
  }

  ngAfterContentInit(){
    this.log('ngAfterContentInit');
  }

  ngAfterContentChecked(){
    this.log('ngAfterContentChecked');
  }

  ngAfterViewInit(){
    this.log('ngAfterViewInit');
  }
   ngAfterViewChecked(){
    this.log('ngAfterViewChecked');
  }

  ngOnDestroy(){
    this.log('ngOnDestroy');
  }

private log(hook: string){
  console.log(hook)
}

}

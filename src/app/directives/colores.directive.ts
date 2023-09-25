import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appColores]'
})
export class ColoresDirective {

  constructor(public ElementRef : ElementRef, public renderer :Renderer2) { 
    this.colorDeFondo();

  }

colorDeFondo(){
  this.renderer.setStyle(this.ElementRef.nativeElement,'backgroundColor','red');
}


}




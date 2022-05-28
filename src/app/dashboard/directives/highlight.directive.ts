import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el:ElementRef) { }

  @HostListener('mouseenter',['$event']) onEnterMouse(e:MouseEvent){
 
    let doc = document.getElementById(this.el.nativeElement.id)
    console.log(doc,'haha doc')
    doc.classList.add('active')
  }

  @HostListener('mouseleave',['$event']) onLeaveMouse(e:MouseEvent){

    let doc = document.getElementById(this.el.nativeElement.id)
    console.log(doc,'haha doc')
    doc.classList.remove('active')

  }

}

import { Directive, ElementRef, HostBinding } from '@angular/core';
import { HostListener } from '@angular/core';

@Directive({
  selector: '[appHideside]'
})
export class HidesideDirective {

  constructor(private el:ElementRef) { }

  

  @HostListener('document:click',['$event']) onGlobalClick(event){

    let doc = document.getElementById('sideWindow')
    let doc2 = document.getElementById('mainRelevance')

    
    if(doc.classList.contains('visible')){
      if(this.el.nativeElement.contains(event.target)){
        

      }else{
        doc2.click()
        // console.log('no')
        // doc.classList.remove('visible')
        // doc.classList.add('hide')'document:

      }

    }

    


}



}

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;
  @HostListener('window:click', ['$event']) toggleOpen(event: Event) {
    console.log('yes here')
    this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
  }
  constructor(private elRef: ElementRef) {}
}

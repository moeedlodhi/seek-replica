import { Directive, HostListener } from '@angular/core';
import { ElementRef } from '@angular/core';
@Directive({
  selector: '[appDisableDiv]'
})
export class DisableDivDirective {

  constructor(private el:ElementRef) { }

  @HostListener('document:mousedown',['$event']) onGlobalClick(event){

    console.log(event.target.parentElement,'check event',this.el.nativeElement)
    if(event.target.parentElement !=this.el.nativeElement && event.target.name !="keywordJob"){
      let doc1=document.getElementById('popa2')
        doc1.style.display='none'

    }else{
      let doc1=document.getElementById('popa2')
      doc1.style.display='block'

    }
    
  }

}


@Directive({
  selector: '[appDisableDiv2]'
})
export class DisableDivDirective2 {

  constructor(private el:ElementRef) { }

  @HostListener('document:mousedown',['$event']) onGlobalClick(event){

 
  
    if(this.el.nativeElement.name !== event.target.name){
      if(event.target.className==='mat-list-text'||event.target.className==='mat-pseudo-checkbox'|| event.target.className==='mat-pseudo-checkbox mat-pseudo-checkbox-checked' ||event.target.className==='mat-list-item-content mat-list-item-content-reverse' || event.target.className==="mat-pseudo-checkbox ng-star-inserted" ||event.target.className==='mat-pseudo-checkbox ng-star-inserted mat-pseudo-checkbox-checked'){
        let doc1=document.getElementById('popa3')
        doc1.style.display='block'
      }
      else{

        let doc1=document.getElementById('popa3')
        doc1.style.display='none'

      }
    }else{

      let doc1=document.getElementById('popa3')
      doc1.style.display='block'

    }
  }

}


@Directive({
  selector: '[appDisableDiv3]'
})
export class DisableDivDirective3 {

  constructor(private el:ElementRef) { }

  @HostListener('document:mousedown',['$event']) onGlobalClick(event){

    console.log(event.target.parentElement,'check event',this.el.nativeElement)
    if(event.target.parentElement !=this.el.nativeElement && event.target.name !="keywordRegion"){
      let doc1=document.getElementById('popa4')
        doc1.style.display='none'

    }else{
      let doc1=document.getElementById('popa4')
      doc1.style.display='block'

    }
  }

}

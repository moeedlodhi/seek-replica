import { Directive, ElementRef } from '@angular/core';
import { HostListener } from '@angular/core';

@Directive({
  selector: '[appMinimenu]'
})
export class MinimenuDirective {
  inputsArray:Array<string> = ['input1','input2','input3','input4','input5','input6','input7']

  constructor(private el:ElementRef) { }


  @HostListener('window:click',['$event']) onGlobalClick(event){

    

    if(this.el.nativeElement.contains(event.target)){
 

      if(event.target.id==='input1'){
        let doc = document.getElementById('menu1')
        doc.classList.remove('hide')
        doc.classList.add('visible')
        this.hideElements('menu2','menu3','menu4','menu5','menu6','menu7')
      }
      else if(event.target.id==='input2'){
        let doc = document.getElementById('menu2')
        doc.classList.remove('hide')
        doc.classList.add('visible')
        this.hideElements('menu1','menu3','menu4','menu5','menu6','menu7')
      }
      else if(event.target.id==='input3'){
        let doc = document.getElementById('menu3')
        doc.classList.remove('hide')
        doc.classList.add('visible')
        this.hideElements('menu1','menu2','menu4','menu5','menu6','menu7')
      }
      else if(event.target.id==='input4'){
        let doc = document.getElementById('menu4')
        doc.classList.remove('hide')
        doc.classList.add('visible')
        this.hideElements('menu1','menu2','menu3','menu5','menu6','menu7')
      }
      else if(event.target.id==='input5'){
        let doc = document.getElementById('menu5')
        doc.classList.remove('hide')
        doc.classList.add('visible')
        this.hideElements('menu1','menu2','menu3','menu4','menu6','menu7')
      }
      else if(event.target.id==='input6'){
        let doc = document.getElementById('menu6')
        doc.classList.remove('hide')
        doc.classList.add('visible')
        this.hideElements('menu1','menu2','menu3','menu4','menu5','menu7')
      }
      else if(event.target.id==='input7'){
        let doc = document.getElementById('menu7')
        doc.classList.remove('hide')
        doc.classList.add('visible')
        this.hideElements('menu1','menu2','menu3','menu4','menu5','menu6')
      }
    }
    if(this.inputsArray.includes(event.target.id)){

    }else{
      console.log('hey')
      this.hideAllElements('menu1','menu2','menu3','menu4','menu5','menu6','menu7')
    }

  
    
  }

  hideElements(item1,item2,item3,item4,item5,item6){

    try{
      let doc1 = document.getElementById(item1)
      let doc2 = document.getElementById(item2)
      let doc3  = document.getElementById(item3)
      let doc4 = document.getElementById(item4)
      let doc5 = document.getElementById(item5)
      let doc6 = document.getElementById(item6)
      if(doc1.classList.contains('visible')){
        doc1.classList.remove('visible')
        doc1.classList.add('hide')
      }
      if(doc2.classList.contains('visible')){
        doc2.classList.remove('visible')
        doc2.classList.add('hide')
      }
      if(doc3.classList.contains('visible')){
        doc3.classList.remove('visible')
        doc3.classList.add('hide')
      }
      if(doc4.classList.contains('visible')){
        doc4.classList.remove('visible')
        doc4.classList.add('hide')
      }
      if(doc5.classList.contains('visible')){
        doc5.classList.remove('visible')
        doc5.classList.add('hide')
      }
      if(doc6.classList.contains('visible')){
        doc6.classList.remove('visible')
        doc6.classList.add('hide')
      }

    }
    catch{
      console.log('haha')

    }
  }


  hideAllElements(item1,item2,item3,item4,item5,item6,item7){

    try{
      let doc1 = document.getElementById(item1)
      let doc2 = document.getElementById(item2)
      let doc3  = document.getElementById(item3)
      let doc4 = document.getElementById(item4)
      let doc5 = document.getElementById(item5)
      let doc6 = document.getElementById(item6)
      let doc7 = document.getElementById(item7)
      if(doc1.classList.contains('visible')){
        doc1.classList.remove('visible')
        doc1.classList.add('hide')
      }
      if(doc2.classList.contains('visible')){
        doc2.classList.remove('visible')
        doc2.classList.add('hide')
      }
      if(doc3.classList.contains('visible')){
        doc3.classList.remove('visible')
        doc3.classList.add('hide')
      }
      if(doc4.classList.contains('visible')){
        doc4.classList.remove('visible')
        doc4.classList.add('hide')
      }
      if(doc5.classList.contains('visible')){
        doc5.classList.remove('visible')
        doc5.classList.add('hide')
      }
      if(doc6.classList.contains('visible')){
        doc6.classList.remove('visible')
        doc6.classList.add('hide')
      }
      if(doc7.classList.contains('visible')){
        doc7.classList.remove('visible')
        doc7.classList.add('hide')
      }
    }
    catch{

    }
    
  }




}

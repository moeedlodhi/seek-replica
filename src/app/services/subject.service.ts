import { Injectable } from "@angular/core";
import { Subject,Observable,BehaviorSubject } from "rxjs";


export class mainService {
    private subject = new Subject<any>();
  
    sendMessage(message) {
        this.subject.next(message);
    }
  
    clearMessages() {
        this.subject.next();
    }
  
    getMessage(): Observable<any> {
        return this.subject.asObservable();
    }
  }


  
@Injectable()  
export class DataService{
    private messageSource = new BehaviorSubject('default message');
  latestMessage = this.messageSource.asObservable();

  constructor() { }

  sendMessage(message: string) {
    this.messageSource.next(message)
  }

  }
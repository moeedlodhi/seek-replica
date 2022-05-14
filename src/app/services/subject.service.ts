import { Subject,Observable } from "rxjs";


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
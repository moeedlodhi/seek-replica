import { Injectable } from "@angular/core";
import { HttpInterceptor,HttpRequest,HttpHandler,HttpEvent  } from "@angular/common/http";
import { Observable } from "rxjs";



@Injectable({
    providedIn: 'root'
  })
  export class HttpinterceptopService implements HttpInterceptor {
  
    constructor() {}
  
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      // add authorization header with jwt token if available
      const token = localStorage.getItem('Token');
      if (token) {
        request = request.clone({
          setHeaders: {
            Authorization: `JWT ${token}`
          }
        });
      }
  
      return next.handle(request);
    }
  
    
  }
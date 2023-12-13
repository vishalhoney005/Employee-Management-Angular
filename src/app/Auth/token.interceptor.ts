import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private authsvc:AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let token =this.authsvc.getUser().token;
    if (token != null){
      request = request.clone({
        setHeaders:{
          Authorization:`Bearer ${token}`
          }
          });
    }

    return next.handle(request);
  }
}

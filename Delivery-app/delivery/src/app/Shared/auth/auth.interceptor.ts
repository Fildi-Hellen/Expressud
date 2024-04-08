import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../../Services/auth.service';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authservice: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const user = this.authservice.currentUser;
    if(user.token)
    {
      request = request.clone({
        setHeaders:{
          access_token: user.token
        }
      })
    }
    return next.handle(request);
  }
}

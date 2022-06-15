import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {TokenService} from "../services/token.service";

@Injectable()

export class AuthconfigInterceptor implements HttpInterceptor {

  constructor(private tokenService: TokenService) {

  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({
      setHeaders: {
        Authorization: "Bearer " + this.tokenService.token
      }
    });
    return next.handle(req);
  }
}

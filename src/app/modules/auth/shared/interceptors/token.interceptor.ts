import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {InterceptorSkip} from '../../../../shared/interceptors/skip.interceptor';
import {TokenService} from '../service/token.service';
import {environment} from '../../../../../environments/environment';
import { TempTokenInterceptor } from 'src/app/shared/interceptors/temp-token.interceptor';

@Injectable()

export class TokenInterceptor implements HttpInterceptor {

  constructor(private _tokenService: TokenService) {

  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (request.headers && request.headers.has(TempTokenInterceptor)) {
      return next.handle(request);
    }

    if (request.headers && request.headers.has(InterceptorSkip)) {
      const headers = request.headers.delete(InterceptorSkip);
      return next.handle(request.clone({headers}));
    }
    const req = request.clone({
      setHeaders: {
        'Authorization': `Bearer ${this.refreshOrAccess(request.url)}`,
      }
    })
    return next.handle(req);
  }

  refreshOrAccess(url: string) {
    return url == `${environment.urlApi}refresh` ? this._tokenService.getRefreshToken() : this._tokenService.getAccessToken();
  }
}

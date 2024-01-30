import {HttpHeaders} from '@angular/common/http';

export const TempTokenInterceptor = 'tempToken';
export const TempTokenInterceptorHeader = new HttpHeaders({
  'tempToken': ''
});

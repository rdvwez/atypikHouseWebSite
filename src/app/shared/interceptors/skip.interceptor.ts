import {HttpHeaders} from '@angular/common/http';

export const InterceptorSkip = 'X-Skip-Interceptor';
export const SkipInterceptorHeader = new HttpHeaders({
  'X-Skip-Interceptor': ''
});

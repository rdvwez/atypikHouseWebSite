import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../../../environments/environment';
import {BehaviorSubject, map, Observable, tap} from 'rxjs';
import {CredentialInterface, TokenInterface} from '../interfaces/auth.interface';
import {ConnectState} from '../store';
import {TokenService} from './token.service';
import {SkipInterceptorHeader} from '../../../../shared/interceptors/skip.interceptor';
import {UserInterface} from '../../../admin/users/shared/model/user.interface';
import {UserSerializer} from '../../../admin/users/shared/serializer/user.serializer';
import {Router} from '@angular/router';

@Injectable()
export class AuthService {
  lastLink: BehaviorSubject<string> = new BehaviorSubject<string>('');
  // the link when forced siginin user
  getLastLink = this.lastLink.asObservable();

  constructor(
    private _http: HttpClient,
    private _tokenService: TokenService,
    private serializer: UserSerializer,
    private _router: Router
  ) {
  }

  signInWithEmailAndPassword(credential: CredentialInterface): Observable<TokenInterface> {
    return this._http.post<TokenInterface>(`${environment.urlApi}login`,
      {
        email: credential.email,
        password: credential.password
      }, {headers: SkipInterceptorHeader}
    ).pipe(
      map((result: TokenInterface) => {
        // store data localStorage
        this._tokenService.token = result;
        return result;
      })
    );
  }

  signInWithGoogle(): void {
    let url = `${environment.urlApi}login/google`
    window.location.href = url
  }

  handleAuthentication(tempToken: string): Observable<TokenInterface> {

    let headers = new HttpHeaders({
      'Authorization': `Bearer ${tempToken}`,
      'tempToken': ''
    });
    return this._http.get<TokenInterface>(`${environment.urlApi}user/fullfil/login`, {
      headers: headers
    }).pipe(
      map((result: TokenInterface) => {
        this._tokenService.token = result;
        return result;
      })
    )

  }

  //************************************************** A changer
  // this._router.navigate(['/']);


  autoLogin() {
    return this._http.get<TokenInterface>(`${environment.urlApi}refresh`)
      .pipe(
        map((result: TokenInterface) => {
          // const {access_token, refresh_token} = result;
          // Store token credential
          this._tokenService.token = result;
          return result;
        })
      )
  }

  userConnected(): Observable<UserInterface> {
    return this._http.get<UserInterface>(`${environment.urlApi}user/me`).pipe(
      tap((user: UserInterface) => {
        return this.serializer.fromJson(user);
      })
    );
  }

  formatTokenToConnect(token: TokenInterface): ConnectState {
    let decoded = this._tokenService.decode(token.access_token);
    return {
      id: decoded.id,
      access_token: token.access_token,
      refresh_token: token.refresh_token,
      is_admin: decoded.is_admin,
      is_owner: decoded.is_owner,
      is_customer: decoded.is_customer
    }
  }

  signUp({email, password, username}: CredentialInterface): Observable<any> {
    return this._http.post(`${environment.urlApi}register`, {
      email,
      password,
      username
    });
  }

  /**
   * logout user form the server
   */
  logOut(): Observable<any> {
    return this._http.get(`${environment.urlApi}logout`);
  }

  setLastLink(url: string): void {
    this.lastLink.next(url);
  }
}

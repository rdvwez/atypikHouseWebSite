import {Injectable} from '@angular/core';
import {DecodedInterface, TokenInterface} from '../interfaces/auth.interface';
import  {  CookieService  }  from  'ngx-cookie-service' ;

@Injectable()
export class TokenService {

  private cookieOptions = {
    expires: 1, // Fais que le cookie expire au bout de 1 jour
    secure: true, // Assurez-vous que le cookie est envoyé uniquement sur HTTPS
    httpOnly: true, // Rend le cookie inaccessible au JavaScript côté client
    sameSite: 'Strict' as const  // Limite l'envoi du cookie aux requêtes same-site
  };

  constructor(private cookieService: CookieService) {
  }

  get token(): any {
    // let token = localStorage.getItem('hatypicHouse');
    const token = this.cookieService.get('token');
    if (!token){
      return null
    }
    
    return JSON.parse(token) as TokenInterface;
  }

  set token(token: TokenInterface) {
    let stringifiedToeken = JSON.stringify(token)
    // let stringifiedToeken = JSON.stringify(token.refresh_token)
    this.cookieService.set('token', stringifiedToeken, this.cookieOptions)
    // localStorage.setItem('hatypicHouse', JSON.stringify(token))
  }

  removeToken(): void {
    // localStorage.removeItem('hatypicHouse');
    this.cookieService.delete('token')
  }

  decode(accessToken: string): DecodedInterface {
    let base64Url = accessToken.split('.')[1];
    let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    let jsonPayload = decodeURIComponent(window.atob(base64).split('').map((c) => {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
  }

  _isExpiredToken(): boolean {
    let tokenData: TokenInterface = this.token;
    if (!tokenData) return false;

    // Get decoded token
    let decodedToken = this.decode(tokenData.access_token);
    let date = this._getTokenExpirationDate(decodedToken)

    if (date === null) return true;

    // Check if the token is expired
    return !(date.valueOf() > new Date().valueOf());
  }

  _getTokenExpirationDate(decodedToken: any): Date | null {
    if (!decodedToken.hasOwnProperty('exp')) {
      return null
    }
    const date = new Date(0);
    date.setUTCSeconds(decodedToken.exp);

    return date;
  }

  getAccessToken(): string {
    return this.token?.access_token;
  }

  getRefreshToken(): string {
    return this.token?.refresh_token;
  }
}

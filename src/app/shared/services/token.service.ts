import {Injectable} from "@angular/core";
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable()

export class TokenService {

  constructor() {
  }
  public get token() : string | null {
    return localStorage.getItem('token');
  }

  static setToken(token: string): void {
    localStorage.setItem("token", token)
  }
  static deleteToken() {
    localStorage.removeItem('token');
  }

  /*** JWT token method**/
  decodeToken() {
    const helper = new JwtHelperService();
    return this.token && helper.decodeToken(this.token);
  }

 }

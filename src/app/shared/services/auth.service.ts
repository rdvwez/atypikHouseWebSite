import { tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../interfaces/user.interface';
import { Credential } from '../interfaces/credential.interface';
import { environment } from '../../../environments/environment'
import { TokenService } from './token.service';
import {TokenInterface} from "../interfaces/token.interface";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public user$:BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);
  public apiUrl = environment.backendServer;

  constructor(private httpClient: HttpClient, private tokenService: TokenService) { }

  public setCurentUser(): void{

    let id = this.tokenService.decodeToken().id

    this.getUserByid(id).subscribe((user: User) =>{
      this.user$.next(user);
      console.log(this.user$)
    },error => console.log(error))
    // .pipe(
    //   tap((user: User) =>{
    //     this.user$.next(user);
    //     console.log(this.user$)
    //   })
    // )
  }


  public getUserByid(id:number): Observable<User>{
    return this.httpClient.get<User>(this.apiUrl.concat('/users/'+id))

  }
  


  public login(credentials:Credential):Observable<TokenInterface>{
    return this.httpClient.post<TokenInterface>(this.apiUrl.concat('/login_check'),credentials)
    .pipe(
      tap((data:TokenInterface) =>{
        if(data) {
          TokenService.setToken(data.token)
          this.setCurentUser()
        } else {
          TokenService.deleteToken();
        }
      })
    );
  }

  public register(user:User):Observable<any>{
    return this.httpClient.post(this.apiUrl.concat('/user'),user);
  }
}

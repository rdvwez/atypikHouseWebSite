import { tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../interfaces/user.interface';
import { Credential } from '../interfaces/credential.interface';
import { environment } from '../../../environments/environment'


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public user$:BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);
  public apiUrl = environment.backendServer;

  constructor(private httpClient: HttpClient) { }

  public fetchCurentUser(): Observable<User>{
    //Pas besoin d'ajouter l'identifiant, car il est dans le token 
    return this.httpClient.get<User>(this.apiUrl.concat('/user'))
    .pipe(
      tap((user: User) =>{
        this.user$.next(user);
      })
    )
  }

  public login(credentials:Credential):Observable<User>{
    // console.log(credentials)
    return this.httpClient.post<User>(this.apiUrl.concat('/login_check'),credentials)
    .pipe(
      tap((user:User) =>{
        if(user){
          this.user$.next(user)
          // console.log(this.user$)
        }else{
          console.log('no user')
        }
      })
    );
  }

  public register(user:User):Observable<any>{
    return this.httpClient.post(this.apiUrl.concat('/user'),user);
  }
}

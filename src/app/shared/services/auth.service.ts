import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../interfaces/user.interface';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public user$:BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);

  constructor(private httpClient: HttpClient) { }

  public fetchCurentUser(): Observable<User>{
    //Pas besoin d'ajouter l'identifiant, car il est dans le token 
    return this.httpClient.get<User>('/api/users')
    .pipe(
      tap((user: User) =>{
        this.user$.next(user);
      })
    )
  }

  public login(credentials:{eamil:String, password:String}):Observable<User>
  {
    return this.httpClient.post<User>('/api/login_check',credentials)
    .pipe(
      tap((user:User) =>{
        if(user){
          this.user$.next(user)
        }
      })

    );
  }

  // public register(user:User):Observable<any>
  // {
  //   return this.httpClient.post('/api/user',user);
  // }
}

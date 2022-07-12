import { tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
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

  async setCurentUser(){

    let id = this.tokenService.decodeToken().id

    this.getUserByid(id).subscribe((user: User) =>{

      
      this.adapteUserFileUrl(user);
      
      // this.user$.next(user);
     user && localStorage.setItem(
        'user',JSON.stringify(user)
      )
      // console.log(this.user$)
    },error => console.log(error))


  }

  public getCurrentUser(): any{
    // if (localStorage.getItem('user')){
    //   return  of(JSON.parse(localStorage.getItem('user')))
    // }

    var retrievedObject = localStorage.getItem('user');

// console.log('user: ', JSON.parse(retrievedObject));

      // console.log(JSON.parse(localStorage.getItem('user')))
      // retrievedObject && console.log( JSON.parse(retrievedObject));
    return  retrievedObject && JSON.parse(retrievedObject);
    
  }

  public  adapteUserFileUrl(user:User){
    if (user.fileUrl == undefined) {
      user.fileUrl= 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png' ; 
    } else {
      user.fileUrl= 'https://127.0.0.1:8000/'.concat(user.fileUrl) ;
    }

   
  
    // return ' ? 'https://127.0.0.1:8000/'.concat(user.fileUrl)  : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png' ; 
   
}


  public getUserByid(id:number): Observable<User>{
    return this.httpClient.get<User>(this.apiUrl.concat('/users/'+id))

  }
  


   login(credentials:Credential):Observable<TokenInterface>{
    return this.httpClient.post<TokenInterface>(this.apiUrl.concat('/login_check'),credentials)
    .pipe(
      tap(async (data:TokenInterface) =>{
        if(data) {
          TokenService.setToken(data.token)
          // await this.setCurentUser()
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

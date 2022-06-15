import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, Observable, of, tap ,map} from 'rxjs';
import { User } from '../interfaces/user.interface';
import { Credential } from '../interfaces/credential.interface';
import {TokenService} from "./token.service";


@Injectable({
  providedIn: 'root'
})
export class UserService {
  ADMIN_ROLE = "ROLE_ADMIN";

  constructor(private tokenService: TokenService) {}


  public user$: Observable<any[]> = of([
    {
      _id: '1',
      name:' KENANG TAYA',
      email:'valentinKeanage@gmail.com',
      first: 'valelntin',
      password: 'valentin@11',
      role: 'ROLE_OWNER',
      dateNaiss: '14/09/1990',
      state: false

    },
    {
      _id: '2',
      name:'ILLO',
      email:'gloriaillo@gmail.com',
      first: 'Gloria',
      password: 'gloria@12',
      role: 'ROLE_OWNER',
      dateNaiss: '01/11/1994',
      state: false

    },
    {
      _id: '3',
      name:'MOUKOKO',
      email:'nellmoukoko@gmail.com',
      first: 'Nell',
      password: 'nell@13',
      role: 'ROLE_MANAGER',
      dateNaiss: '01/12/1990',
      state: false

    },
    {
      _id: '4',
      name:'VWEZWANGA',
      email:'nellmoukoko@gmail.com',
      first: 'Desir',
      password: 'desir@14',
      role: 'ROLE_USER',
      dateNaiss: '1é/05/1993',
      state: false,
      img: 'https://media-exp1.licdn.com/dms/image/C4D03AQF9nm05XN6A2g/profile-displayphoto-shrink_200_200/0/1646988407428?e=1657756800&v=beta&t=9FmNL7UWzBtBD4FUYvAv7WTr1Q68SFbIr-9NwGkkotg'

    }
  ]);



  public createUser(user:User):void{
    // const value = this.user$.v
  }

  public login(credential:Credential):void{

    // return this.user$.pipe(
    //   filter((users:User) => users !== null),
    //   map((users:User[]) => {
    //       return users
    //   })
    // );
  }

  public isLogged(): boolean {
    return this.tokenService.decodeToken()
  }

  isAdmin(): boolean {
    return this.isLogged() && this.tokenService.decodeToken().roles.find((role: string) => role === this.ADMIN_ROLE);
  }

}

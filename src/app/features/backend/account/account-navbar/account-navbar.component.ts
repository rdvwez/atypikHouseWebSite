import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service'; 
import { User } from 'src/app/shared/interfaces/user.interface';
import { TokenService } from 'src/app/shared/services/token.service'; 
import { find } from 'rxjs';

@Component({
  selector: 'app-account-navbar',
  templateUrl: './account-navbar.component.html',
  styleUrls: ['./account-navbar.component.scss']
})
export class AccountNavbarComponent implements OnInit {

  ADMIN_ROLE = "ROLE_ADMIN";
  USER_ROLE = "ROLE_USER";
  OWNER_ROLE = "ROLE_OWNER";

  public connectedUser: User | null  = {email:'', name:'', firstname:'',fileUrl:'', gender:'',roles:[]} !  ;
  // public displayItem: boolean = ;
  public userRoles: string[]  = [] ;
  public role:string = "";

  public isUer: boolean=false;
  public isAdmin: boolean=false;
  public isOwner: boolean=false;

  verifyRoles():void{
    if (this.connectedUser?.roles.find(role => role === this.USER_ROLE)){ this.isUer = true }
    if (this.connectedUser?.roles.find(role => role === this.ADMIN_ROLE)){ this.isAdmin = true }
    if (this.connectedUser?.roles.find(role => role === this.OWNER_ROLE)){ this.isOwner = true }
  }


  constructor(private router:Router,private authService: AuthService, private tokenService: TokenService) { 
   
  }

  


  ngOnInit(): void {
    let user = this.authService.getCurrentUser()
      
    console.log( this.tokenService.decodeToken().id)

    this.authService.getUserByid(this.tokenService.decodeToken().id).subscribe((user: User) =>{

      
      this.authService.adapteUserFileUrl(user);
      
      // this.connectedUser = user ;
      this.connectedUser = user ;
      this.verifyRoles()
      if(user?.roles ){
        this.userRoles = user?.roles ;
      }
      
      // this.connectedUser.fileUrl = 'https://127.0.0.1:8000/'.concat(user?.fileUrl) 
      // console.log(this.authService.user$)
      // console.log(user )
      console.log(user )
     let  rolesTablesLength = user?.roles?.length 
      // console.log(rolesTablesLength)
      console.log(rolesTablesLength )
      if (rolesTablesLength){
        let rolesTablesLengthMnusOne  = rolesTablesLength -1
        this.role = this.userRoles[rolesTablesLengthMnusOne]
        // console.log( this.userRoles[rolesTablesLengthMnusOne])
      }
      
      // console.log(this.user$)
    },error => console.log(error))
    
    // console.log(user)
     
      
      // console.log(typeof rolesTablesLength)
      // console.log(rolesTablesLength-1)
      // this.roles = user?.roles
      // console.log(user?.roles[rolesTablesLength])
    
    // this.connectedUser = 'trfnffjkfkfkfkkd'
    
    // console.log(this.authService.user$)
  }

 

}

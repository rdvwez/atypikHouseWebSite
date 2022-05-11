import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Meta, Title } from '@angular/platform-browser';
import { AuthService } from '../shared/services/auth.service';
// import { Router } from 'express';
import { Router } from '@angular/router';
import  { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // public loginForm: FormGroup;

  public descriptionContent = "Trouvez dans votre atypik compte les elements de gestion pour assurer le suivis de vos reservations"
  public pageTitle = "AtypikHouse : accedez à votre atypik compte"
  


  public loginForm: FormGroup=  this.fb.group({
    'email': ['', Validators.required],
      'password': ['', Validators.required]
  });

  public error! : String;

 

  constructor(
    private fb: FormBuilder, 
    private authService: AuthService,
    private router:Router,
    private metaService: Meta, 
    private titleService:Title,
    private userService: UserService
    ) {

    this.metaService.addTag({name: 'description', content: this.descriptionContent});
    this.titleService.setTitle(this.pageTitle);
    this.loginForm = this.fb.group({
      'email': ['', Validators.required],
      'password': ['', Validators.required],
      'remember': ['', Validators.required],

    })
    }

  ngOnInit(): void {}

  public submit(): void { 

    // console.log(this.loginForm.getRawValue())
    this.userService.login(this.loginForm.getRawValue())
    // if (this.loginForm.valid){
    //   this.authService.login(this.loginForm.getRawValue()).subscribe(
    //     () => {
    //     this.router.navigateByUrl('/profil')
    //   },
    //   (err)=> {
    //     this.error = err?.error || 'une erreur est survenue'
    //   }
    // )
    
    // }

    // if (this.loginForm.valid){
    //   this.userService.login(this.loginForm.value)
    //     this.router.navigateByUrl('/profil')
    //   }
    //   else {
    //     this.error = 'Login ou mot de passe incorrect'
    //   }
    
    }
    
    // console.log(this.loginForm.getRawValue())
  // }

}

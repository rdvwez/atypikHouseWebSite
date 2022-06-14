import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { AuthService } from '../shared/services/auth.service';
import  { UserService } from '../shared/services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
    'password': ['', Validators.required],
    'remember': ['', Validators.required],
  });

  public error!: String;

  constructor(
    private router:Router,
    private fb: FormBuilder, 
    private metaService: Meta, 
    private titleService:Title,
    // private userService: UserService,
    private authService: AuthService,
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
    // console.log(this.loginForm.valid)
    if (this.loginForm.valid){
      this.authService.login(this.loginForm.getRawValue()).subscribe(
        {
          next: () => { 
            console.log(this.authService.user$.value)
            // this.router.navigateByUrl('/account'); 
          },
          error: (err) => { this.error = err?.error.message || "Login ou Mot de passe incorrect";
          // console.log(err)
        }
        }
      )
    }

    
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

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

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
    private titleService:Title
    ) {

    this.metaService.addTag({name: 'description', content: this.descriptionContent});
    this.titleService.setTitle(this.pageTitle);
    }

  ngOnInit(): void {}

  public submit(): void { 

    if (this.loginForm.valid){
      this.authService.login(this.loginForm.getRawValue()).subscribe(
        () => {
        this.router.navigateByUrl('/profil')
      },
      (err)=> {
        this.error = err?.error || 'une erreur est survenue'
      }
    )
    }
    
    // console.log(this.loginForm.getRawValue())
  }

}

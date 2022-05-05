import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup=  this.fb.group({
    'email': ['', Validators.required],
      'password': ['', Validators.required]
  });

  public error! : String;

 

  constructor(
    private fb: FormBuilder, 
    private authService: AuthService,
    private router:Router) {}

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

import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public descriptionContent = "Profitez de plus de 100.000 offres et découvrez des logements alternatif en Europe!"
  public pageTitle = "AtypikHouse : Inscrivez-vous Maintenant"

  // public registerform: FormGroup;
  public error! : String;

  public registerform: FormGroup=  this.fb.group({
    'email': ['', Validators.required],
    'password': ['', Validators.required],
    'repetedPassword': ['', Validators.required],
    'firstname': ['', Validators.required],
    'name': ['', Validators.required],
    'stayConnecteed': [''],
    'stayInformed': ['']
  });

  constructor(
    private router:Router,
    private fb: FormBuilder,
    private metaService: Meta, 
    private titleService:Title,
    private authService: AuthService) { 
      this.metaService.addTag({name: 'description', content: this.descriptionContent});
      this.titleService.setTitle(this.pageTitle);

      this.registerform = this.fb.group({
        'email': ['', Validators.required],
        'firstname': ['', Validators.required],
        'name': ['', Validators.required],
        'password': ['', Validators.required],
        'repetedPassword': ['', Validators.required],
        'stayConnecteed': [''],
        'stayInformed': ['']
    })
  }

  public submit(): void {
    if (this.registerform.valid){
      this.authService.register(this.registerform.getRawValue()).subscribe(
        {
          next: () => {  this.router.navigateByUrl('/login'); },
          error: (err) => {  this.error = err?.error || "Une erreur est survenu!" }
          // complete: () => console.info('complete') 
        }
        // () =>{
        //   this.router.navigateByUrl('/login');
        // },
        // (err)=>{
        //   this.error = err?.error || "Une erreur est survenu!"
        // }
        
        );
    }
    // console.log(this.registerform.value)
  }

  ngOnInit(): void {
  }

}

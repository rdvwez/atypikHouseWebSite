import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from 'express';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public descriptionContent = "Profitez de plus de 100.000 offres et découvrez des logements alternatif en Europe!"
  public pageTitle = "AtypikHouse : Inscrivez-vous Maintenant"

  public registerform: FormGroup;

  constructor(
    private fb: FormBuilder,
    private metaService: Meta, 
    private titleService:Title) { 
      this.metaService.addTag({name: 'description', content: this.descriptionContent});
      this.titleService.setTitle(this.pageTitle);

      this.registerform = this.fb.group({
        'email': ['', Validators.required],
        'prenom': ['', Validators.required],
        'nom': ['', Validators.required],
        'password': ['', Validators.required],
        'check': ['', Validators.required],
        'checkb': ['', Validators.required],
  
    })


 
    
  }

  public submit(): void {
    console.log(this.registerform.value)
  }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public registerform: FormGroup;

  constructor(private fb: FormBuilder) { 
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

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginform: FormGroup;

  constructor(private fb: FormBuilder) { 
    this.loginform = this.fb.group({
      'username': ['', Validators.required],
      'password': ['', Validators.required],
      'remember': ['', Validators.required],

    })
    
  }

  public submit(): void {
    console.log(this.loginform.value)
  }

  ngOnInit(): void {
  }

}

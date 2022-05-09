import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-footerb',
  templateUrl: './footerb.component.html',
  styleUrls: ['./footerb.component.scss']
})
export class FooterbComponent implements OnInit {

  public contactForm: FormGroup;

  constructor(private fb: FormBuilder) { 

    this.contactForm = this.fb.group({
      'nom': ['', Validators.required],
      'eamil': ['', Validators.required],
      'message': ['', Validators.required]
    })

  }

  public  submit() : void{
    
  }

  ngOnInit(): void {
  }

}

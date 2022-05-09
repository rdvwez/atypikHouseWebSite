import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-idees',
  templateUrl: './idees.component.html',
  styleUrls: ['./idees.component.scss']
})
export class IdeesComponent implements OnInit {

  public ideaForm: FormGroup;

  constructor(private fb: FormBuilder) { 
    this.ideaForm = this.fb.group({
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

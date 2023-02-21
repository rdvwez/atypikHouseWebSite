import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-idees',
  templateUrl: './idees.component.html',
  styleUrls: ['./idees.component.scss']
})
export class IdeesComponent implements OnInit {

  public ideaForm: FormGroup;

  public descriptionContent = "Nous vous invitons tres respectueusement à nous costomiser votre atypk house à travers ce formulaire"
  public pageTitle = "AtypikHouse : une idée ?"

  constructor(private fb: FormBuilder, private metaService: Meta, private titleService:Title) { 
    this.metaService.addTag({name: 'description', content: this.descriptionContent});
    this.titleService.setTitle(this.pageTitle);
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

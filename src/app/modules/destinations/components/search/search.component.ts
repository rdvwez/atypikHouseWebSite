import {Component, Input, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../../../shared/shared.module';
import {DESTINATION_CONST} from '../../shared/constant/destination.constant';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    CommonModule,
    SharedModule
  ],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  dataConst = DESTINATION_CONST;
  @Input() label: string;
  @Input() placeholder: string;
  // forms
  @Input() formGroup: FormGroup;
  @Input() formName: string;

  constructor() {
  }

  ngOnInit(): void {
  }
}

import {Component, Input, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormGroup} from '@angular/forms';
import {SharedModule} from '../../../../shared/shared.module';

@Component({
  selector: 'app-button-submit',
  standalone: true,
  imports: [CommonModule,
    SharedModule],
  templateUrl: './button-submit.component.html',
  styleUrls: ['./button-submit.component.css']
})
export class ButtonSubmitComponent implements OnInit {

  @Input() formGroup: FormGroup;
  @Input() customClass: string;
  @Input() loading: boolean | undefined | null = false;

  constructor() {
  }

  ngOnInit(): void {
  }

}

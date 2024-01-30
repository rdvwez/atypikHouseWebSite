import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-input-switch',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './input-switch.component.html',
  styleUrls: ['./input-switch.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputSwitchComponent implements OnInit {

  @Input() customClass: string = 'form-check-input';
  @Input() forInput: string
  @Input() formGroup: FormGroup;
  @Input() formName: string;

  constructor() {
  }

  ngOnInit(): void {
  }

}

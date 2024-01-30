import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-google-login-button',
  templateUrl: './google-login-button.component.html',
  styleUrls: ['./google-login-button.component.css']
})
export class GoogleLoginButtonComponent implements OnInit {
  @Input() buttonText: string = '';
  @Output() customSignin = new EventEmitter<void>();

  onCustomSignIn() {
    this.customSignin.emit();
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}

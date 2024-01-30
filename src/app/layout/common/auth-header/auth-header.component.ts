import {Component, OnInit} from '@angular/core';
import {AUTH_CONST} from '../../../modules/auth/shared/constant/auth.constant';

@Component({
  selector: 'app-auth-header',
  templateUrl: './auth-header.component.html',
  styleUrls: ['./auth-header.component.css']
})
export class AuthHeaderComponent implements OnInit {
  dataConst = AUTH_CONST;

  constructor() {
  }

  ngOnInit(): void {
  }

}

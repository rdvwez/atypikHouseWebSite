import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthActions } from '../../shared/store';

@Component({
  selector: 'app-redirect',
  templateUrl: './redirect.component.html',
  styleUrls: ['./redirect.component.css']
})
export class RedirectComponent implements OnInit {
  // this.route.queryParams.subscribe(params => {
  //   const temp_token = params['temp_token'];

  constructor(private store: Store, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const tempToken = params['temp_token'];
      this.store.dispatch(AuthActions.loginGoogle({tempToken}))
    })
    
  }

}

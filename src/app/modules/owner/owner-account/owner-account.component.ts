import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-owner-account',
  templateUrl: './owner-account.component.html',
  styleUrls: ['./owner-account.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OwnerAccountComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}

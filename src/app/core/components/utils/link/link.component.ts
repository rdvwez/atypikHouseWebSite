import {Component, Input, OnInit} from '@angular/core';
import {SharedModule} from '../../../../shared/shared.module';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-link',
  standalone: true,
  imports: [SharedModule, RouterModule],
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css']
})
export class LinkComponent implements OnInit {

  @Input() urlLink: string
  @Input() customClass: string = 'link';

  constructor() {
  }

  ngOnInit(): void {
  }

}

import { isPlatformServer } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component , Inject, PLATFORM_ID} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'atypikHouseProject';

  constructor() {

   
  
  }
}
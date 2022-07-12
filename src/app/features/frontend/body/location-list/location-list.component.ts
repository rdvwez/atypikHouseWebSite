import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { House } from 'src/app/shared/interfaces/location.interface';
import { LocationService } from 'src/app/shared/services/location.service';


@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.scss']
})
export class LocationListComponent implements OnInit {

  @Input() public houses: House[] = [];
  @Output() private changeLocation: EventEmitter<number> = new EventEmitter();

  constructor(private locationService: LocationService) { 

    // this.locations = [];
  }

  ngOnInit(): void {}

    public selectLocation(index:number):void{
      // console.log(index);
      this.changeLocation.emit(index);
    };
  

}

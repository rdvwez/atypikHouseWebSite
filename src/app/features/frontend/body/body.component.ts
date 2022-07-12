
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { House } from 'src/app/shared/interfaces/location.interface'; 
import { LocationSearchForm } from 'src/app/shared/interfaces/location.searsh.form.interface'; 
import { LocationService } from 'src/app/shared/services/location.service'; 
@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit,OnDestroy {

  public houses: House[] = [];

  public subscription: Subscription = new Subscription();

  
  // public selectedLocation: Location ;

  constructor(private locationService: LocationService) { }

  ngOnInit(): void {
    this.subscription.add(this.locationService.house$.subscribe(
      (locations:House[]) => {
      this.houses = locations;
    }));
    // this.selectedLocation = this.locations[0]
    
  }

  public getLocationSearchFormData(event: LocationSearchForm){
    // console.log(event)
    this.locationService.getSearchLocation(event).subscribe((houses:House[]) => {
      this.houses = houses;
    })
    // console.log(event)
    // this.subscription.add(this.locationService.house$.subscribe(
    //   (locations:House[]) => {
    //   this.houses = locations;
    // }));
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }

  public selectLocation(index:number):void{
    // console.log(index);
    // this.selectedLocation = this.locations[index]
  };

  


}

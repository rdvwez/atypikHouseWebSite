import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {NgbDate, NgbCalendar, NgbDateParserFormatter} from '@ng-bootstrap/ng-bootstrap';
import * as  moment from 'moment';
import { LocationService } from 'src/app/shared/services/location.service';
import { Subscription } from 'rxjs';
import { LocationSearchForm } from 'src/app/shared/interfaces/location.searsh.form.interface';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit {
  public searchBarForm: FormGroup;
  // @Output()  = new EventEmitter<string>();
  @Output() private sendSearchFormData: EventEmitter<LocationSearchForm> = new EventEmitter();
  

  hoveredDate: NgbDate | null = null;

  fromDate: NgbDate | null;
  toDate: NgbDate | null;

  constructor(private fb: FormBuilder,private calendar: NgbCalendar, public formatter: NgbDateParserFormatter, private locationService: LocationService) {
    this.fromDate = calendar.getToday();
    this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);

    this.searchBarForm = this.fb.group({
      'city': ['', Validators.required],
      'category': ['', Validators.required],
      'nbPerson': ['', Validators.required],
      'departureDate': [ this.toDate, Validators.required],
      'arrivalDate': [ this.fromDate, Validators.required],
    })
    
   }

  //  public subscription: Subscription = new Subscription();

  ngOnInit(): void {}


  public submit(): void {
    // console.log(this.searchBarForm.value)
    // console.log(this.searchBarForm)
    // console.log(this.searchBarForm.value)
    // console.log(this.searchBarForm.value.arrivalDate.day)
    // console.log(this.fromDate)
    // this.searshService.getSearchLocation(this.fromDate)
    
    this.searchBarForm.patchValue({
      'departureDate' : this.formatDate(this.toDate),
      'arrivalDate' : this.formatDate(this.fromDate)
    })
    
    this.sendSearchFormData.emit(this.searchBarForm.value)
    // this.locationService.getSearchLocation(this.searchBarForm.value)
  }

  private formatDate(dateObject:any){
    return moment(dateObject.year +"-"+ dateObject.day +"-"+ dateObject.month,"YYYY-MM-DD").format("YYYY-DD-MM");
  }




onDateSelection(date: NgbDate) {
  if (!this.fromDate && !this.toDate) {
    this.fromDate = date;
  } else if (this.fromDate && !this.toDate && date && date.after(this.fromDate)) {
    this.toDate = date;
  } else {
    this.toDate = null;
    this.fromDate = date;
  }
}

isHovered(date: NgbDate) {
  return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) &&
      date.before(this.hoveredDate);
}

isInside(date: NgbDate) { return this.toDate && date.after(this.fromDate) && date.before(this.toDate); }

isRange(date: NgbDate) {
  return date.equals(this.fromDate) || (this.toDate && date.equals(this.toDate)) || this.isInside(date) ||
      this.isHovered(date);
}

validateInput(currentValue: NgbDate | null, input: string): NgbDate | null {
  const parsed = this.formatter.parse(input);
  return parsed && this.calendar.isValid(NgbDate.from(parsed)) ? NgbDate.from(parsed) : currentValue;
}
}

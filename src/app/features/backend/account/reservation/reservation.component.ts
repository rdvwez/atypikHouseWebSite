import { Component,Inject,LOCALE_ID , OnInit } from '@angular/core';
import { ReservationService } from 'src/app/shared/services/reservation.service';
import { Reservation } from 'src/app/shared/interfaces/reservation.interface';
import { getCurrencySymbol, formatCurrency} from '@angular/common';


@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit {
  curr = getCurrencySymbol("EUR", "narrow","fr");

  constructor(private reservationService:ReservationService,@Inject(LOCALE_ID) public locale: string) { }

  public reservations: Reservation[]  = []  ;

  ngOnInit(): void {

    this.reservationService.getReservations().subscribe((reservations : Reservation[]) => {

      this.reservations = reservations

      
    },error => console.log(error))

  

}

showRecervatonDetails(){
  alert('12345')
}
}

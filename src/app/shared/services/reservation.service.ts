import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, tap } from 'rxjs';
import { Reservation } from '../interfaces/reservation.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment'


@Injectable({
  providedIn: 'root'
})
export class ReservationService {

    public apiUrl = environment.backendServer;
    constructor(private httpClient: HttpClient) {}

    public getReservations():Observable<Reservation[]>{
     
        return this.httpClient.get<Reservation[]>(this.apiUrl.concat('/reservations'))
    }

    public getReservationByid(id:number): Observable<Reservation>{
        return this.httpClient.get<Reservation>(this.apiUrl.concat('/reservations/'+id))
    
    }

    // public createReservation(reservation:Reservation):Observable<Reservation>{
    //     return this.httpClient.post<Reservation>(this.apiUrl.concat('/reservations'),reservation).pipe(
    //       tap((savedhouse: House)=> {
    //         const value = this.houseListe$.value;
    //         this.house$.next([...value, savedhouse]);
    //       })
    //     )
    //   }
}
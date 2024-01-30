import {Injectable} from '@angular/core';
import {ISerializer} from '../../../../../shared/serializer/iserializer';
import {ReservationInterface} from '../model/reservation.interface';

@Injectable({
  providedIn: 'root'
})
export class ReservationSerializer extends ISerializer {
  // display on the page
  fromJson(json: any): ReservationInterface {
    return {
      status: json.status,
      id: json.id,
      start_date: json.start_date,
      end_date: json.end_date,
      card_number: json.card_number,
      card_exp_month: json.card_exp_year,
      card_exp_year: json.card_exp_year,
      cvc: json.cvc,
      amount: json.amount,
      user: json.user.email,
      house: json.house
    }
  }

  // send to the server
  toJson(resource: ReservationInterface): any {
    return {
      start_date: resource.start_date,
      end_date: resource.end_date,
      card_number: resource.card_number,
      card_exp_month: resource.card_exp_month,
      card_exp_year: resource.card_exp_year,
      cvc: resource.cvc,
      card_first_name: resource.card_first_name,
      card_last_name: resource.card_last_name,
      amount: resource.amount,
      house_id: resource.house
    }
  }

  static formatForm(data: any): any {
    let {date_range, card_exp, card_number, cvc, house_id, card_last_name, card_first_name} = data;
    const dateReservation = date_range.split('au');
    const cardExpiration = card_exp.split('/');
    return {
      start_date: dateReservation[0].trim(),
      end_date: dateReservation[1].trim(),
      card_number,
      card_last_name: card_last_name,
      card_first_name: card_first_name,
      cvc,
      house: house_id,
      card_exp_month: cardExpiration[0],
      card_exp_year: cardExpiration[1],
    }
  }
}

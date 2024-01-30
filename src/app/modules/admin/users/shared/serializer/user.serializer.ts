import {Injectable} from '@angular/core';
import {ISerializer} from '../../../../../shared/serializer/iserializer';
import {UserInterface} from '../model/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserSerializer implements ISerializer {
  fromJson(json: any): UserInterface {
    return {
      id: json.id,
      name: json.name,
      firstname: json.firstname,
      username: json.username,
      phone_number: json.phone_number,
      email: json.email,
      is_customer: json.is_customer,
      is_owner: json.is_owner,
      is_admin: json.is_admin,
      is_activated: json.is_activated,
      birth_date: json.birth_date,
      gender: json.gender,
      payment_methode: json.payment_methode,
      stripe_custome_id: json.stripe_custome_id,
      created_at: json.created_at,
      updated_at: json.updated_at,
      images: json.images
    }
  }

  toJson(resource: UserInterface): any {
    return {
      name: resource.name,
      firstname: resource.firstname,
      username: resource.username,
      phone_number: resource.phone_number,
      email: resource.email,
      password: resource.password,
      is_customer: resource.is_customer,
      is_owner: resource.is_owner,
      is_admin: resource.is_admin,
      birth_date: resource.birth_date,
      gender: resource.gender,
    }
  }
}

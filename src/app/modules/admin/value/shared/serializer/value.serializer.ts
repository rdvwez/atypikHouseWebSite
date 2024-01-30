import {Injectable} from '@angular/core';
import {ValueInterface} from '../model/value.interface';

@Injectable({
  providedIn: 'root'
})
export class ValueSerializer {
  fromJson(json: any): ValueInterface {
    return {
      id: json.id,
      libelle: json.libelle,
      user: json.user,
      property_object: json.property_object.libelle
    }
  }

  toJson(resource: ValueInterface): any {
    return {
      libelle: resource.libelle,
      property_id: resource.property_object,
    }
  }
}

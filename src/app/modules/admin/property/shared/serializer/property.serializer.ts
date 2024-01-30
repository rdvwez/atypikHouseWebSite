import {Injectable} from '@angular/core';
import {ISerializer} from '../../../../../shared/serializer/iserializer';
import {PropertyInterface} from '../model/property.interface';

@Injectable({
  providedIn: 'root'
})
export class PropertySerializer implements ISerializer {
  fromJson(json: any): PropertyInterface {
    return {
      id: json.id,
      description: json.description,
      libelle: json.libelle,
      is_required: json.is_required,
      category: json.category.libelle
    }
  }

  toJson(resource: PropertyInterface): any {
    return {
      description: resource.description,
      libelle: resource.libelle,
      category_id: resource.category,
      is_required: resource.is_required
    }
  }
}

import {ISerializer} from '../../../../../shared/serializer/iserializer';
import {Injectable} from '@angular/core';
import {CategoryInterface} from '../models/category.interface';

@Injectable({
  providedIn: 'root'
})
export class CategorySerializer extends ISerializer {

  fromJson(json: any): CategoryInterface {
    return {
      id: json.id,
      libelle: json.libelle,
      show: json.show,
      selected: false
    }
  }

  toJson(resource: CategoryInterface) {
    return {
      libelle: resource.libelle,
      show: resource.show
    };
  }
}

import {ISerializer} from '../../../../../shared/serializer/iserializer';
import {ThematicInterface} from '../model/thematic.interface';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThematicSerializer extends ISerializer {

  fromJson(json: any): ThematicInterface {
    return {
      id: json.id,
      libelle: json.libelle,
      show: json.show
    }
  }

  toJson(resource: ThematicInterface) {
    return {
      libelle: resource.libelle,
      show: resource.show
    };
  }
}

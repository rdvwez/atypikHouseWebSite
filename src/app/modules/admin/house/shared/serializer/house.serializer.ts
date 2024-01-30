import {ISerializer} from '../../../../../shared/serializer/iserializer';
import {HouseInterface, ImageUrl} from '../model/house.interface';
import {Injectable} from '@angular/core';
import {ImageInterface} from '../../../../../shared/model/image.interface';

@Injectable({
  providedIn: 'root'
})
export class HouseSerializer extends ISerializer {

  fromJson(json: any): HouseInterface {
    return {
      id: json.id,
      show: json.show,
      libelle: json.libelle,
      description: json.description,
      bedroom_number: json.bedroom_number,
      person_number: json.person_number,
      parking_distance: json.parking_distance,
      address: json.address,
      city: json.city,
      country: json.country,
      created_at: json.created_at,
      area: json.area,
      water: json.water,
      power: json.power,
      price: json.price,
      latitude: json.latitude,
      longitude: json.longitude,
      category: json.category.libelle,
      thematic: json.thematic.libelle,
      images: json.images,
      properties: json.properties
    }
  }

  toJson(resource: HouseInterface): any {
    return {
      libelle: resource.libelle,
      show: resource.show,
      description: resource.description,
      bedroom_number: resource.bedroom_number,
      person_number: resource.person_number,
      parking_distance: resource.parking_distance,
      area: resource.area,
      water: resource.water,
      power: resource.power,
      price: resource.price,
      latitude: resource.latitude,
      longitude: resource.longitude,
      address: resource.address,
      thematic_id: resource.thematic,
      category_id: resource.category,
    };
  }

  // formatImage(images: ImageInterface[]): ImageUrl {
  //   return {
  //     img1: images[0]?.path,
  //     // img2: images[1]?.path,
  //     // img3: images[2]?.path
  //   }
  // }
}

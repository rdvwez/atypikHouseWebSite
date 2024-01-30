import {ResourceInterface} from '../../../../../shared/interfaces/resource.interface';
import {CategoryInterface} from '../../../category/shared/models/category.interface';
import {ThematicInterface} from '../../../thematic/shared/model/thematic.interface';

export interface HouseInterface extends ResourceInterface {
  show?: boolean;
  libelle: string;
  description: string;
  bedroom_number: number;
  person_number: string;
  parking_distance: number;
  address: string;
  city: string;
  country: string;
  area: number;
  water: boolean;
  power: boolean
  price: number;
  latitude: number;
  longitude: number;
  created_at: Date;
  category: CategoryInterface | string;
  thematic: ThematicInterface | string;
  images: ImageUrl[];
  properties: HouseProperty[]
}

export interface ImageUrl {
  path: string;
}
export interface HouseProperty {
  libelle: string;
  value: string;
}

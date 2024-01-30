import {ResourceInterface} from '../../../../../shared/interfaces/resource.interface';
import {PropertyInterface} from '../../../property/shared/model/property.interface';
import {UserInterface} from '../../../users/shared/model/user.interface';

export interface ValueInterface extends ResourceInterface {
  libelle: string;
  property_object: PropertyInterface | string,
  user: UserInterface | string,
}

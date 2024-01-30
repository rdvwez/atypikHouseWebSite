import {ResourceInterface} from '../../../../../shared/interfaces/resource.interface';
import {CategoryInterface} from '../../../category/shared/models/category.interface';

export interface PropertyInterface extends ResourceInterface {
  description: string;
  libelle: string;
  is_required: true;
  category: CategoryInterface | number | string
}

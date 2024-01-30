import {ResourceInterface} from '../../../../../shared/interfaces/resource.interface';

export interface CategoryInterface extends ResourceInterface {
  libelle: string;
  show?: boolean;
}

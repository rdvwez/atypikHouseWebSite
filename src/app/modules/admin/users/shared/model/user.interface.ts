import {ImageInterface} from '../../../../../shared/model/image.interface';

export interface UserInterface {
  id: number;
  name: string;
  firstname: string;
  username: string;
  phone_number: string;
  password?: string
  email: string;
  is_customer: boolean;
  is_owner: boolean;
  is_admin: boolean;
  is_activated: boolean;
  birth_date: Date;
  gender: boolean;
  payment_methode: string;
  stripe_custome_id: string;
  images: ImageInterface[];
  created_at: Date;
  updated_at: Date;
}

import {UserInterface} from '../../../../admin/users/shared/model/user.interface';
import {HouseInterface} from '../../../../admin/house/shared/model/house.interface';
import {ResourceInterface} from '../../../../../shared/interfaces/resource.interface';

export interface ReservationInterface extends ResourceInterface {
  status: StatusReservationEnum,
  start_date: Date,
  end_date: Date,
  card_number: string,
  card_exp_month: number,
  card_exp_year: number,
  cvc: string,
  amount?: number,
  card_first_name?: string,
  card_last_name?: string,
  user?: UserInterface | string,
  house?: HouseInterface | number | string
}

export enum StatusReservationEnum {
  PENDING = "PENDING",
  CANCELED = "CANCELED",
  COMPLETED = "COMPLETED",
  FAILED = "FAILED",
  DELETED = "DELETED"
}

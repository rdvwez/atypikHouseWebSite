import {UserInterface} from '../model/user.interface';

export interface UserState {
  users: ReadonlyArray<UserInterface>,
  error: string
}

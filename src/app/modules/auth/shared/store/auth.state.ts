import {UserInterface} from '../../../admin/users/shared/model/user.interface';

export interface ConnectState {
  id: number | null;
  access_token: string;
  refresh_token?: string;
  is_owner: boolean;
  is_customer: boolean;
  is_admin: boolean;
  error?: string;
  loading?: boolean
}

export interface UserConnectedState {
  isAuthenticated: boolean;
  user: UserInterface | undefined;
  error: string;
}

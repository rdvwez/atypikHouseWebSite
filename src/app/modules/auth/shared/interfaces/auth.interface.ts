export interface DecodedInterface {
  id: number;
  is_owner: boolean;
  is_admin: boolean;
  is_customer: boolean;
}

export interface TokenInterface {
  access_token: string;
  refresh_token: string;
}

export interface CredentialInterface {
  username?: string;
  email: string;
  password: string;
}


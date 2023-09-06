import { ReactNode } from "react";

export interface IUserProviderProps {
  children: ReactNode;
}

export interface IUser {
  id?: number;
  name: string;
  email: string;
  profile_image?: string;
  account_type: string;
  description: string;
}

export interface IUserLogin {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  id?: string;
}

export interface IAddress {
  zipCode: string;
  estate: string;
  city: string;
  street: string;
  number: string;
  complement: string;
}
export interface IUserRegister {
  name: string;
  email: string;
  cpf: string;
  contact_number: string;
  birthdate: Date | string;
  description: string;
  profile_image: string;
  address: IAddress;
  password: string;
  confirmPassword: string;
  account_type: string | null ;
}
export interface IUserUpdate {
  name?: string;
  email?: string;
  cpf?: string;
  contact_number?: string;
  birthdate?: Date;
  description?: string;
}

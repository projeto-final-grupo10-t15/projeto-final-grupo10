import { ReactNode } from "react";

export interface IUserProviderProps{
    children:ReactNode
}

export interface IUserContext{
    loginUser: (data: IUserLogin) => Promise<void>
    loading: boolean
    registerUser: (data: IUserRegister) => Promise<void>
}

export interface IUser {
    id?:string
    name: string
    email:string
}

export interface IUserLogin{
    email:string,
    password:string
}

export interface LoginResponse {
    token:string
}

export interface IUserRegister{
    name:string
    email:string
    password:string
    cpf:string
    contact_number:string
    birthdate: Date
    description:string
    zipCode:string
    state:string
    city:string
    street:string
    number:string
    complement:string
    type_account:string

}
import { ReactNode } from "react";

export interface IUserProviderProps{
    children:ReactNode
}

export interface IUserContext{
    loginUser: (data: IUserLogin) => Promise<void>
    loading: boolean
    registerUser: (data: IUserRegister) => Promise<void>
    logout: () => void
    updateUser: (data: IUserUpdate) => Promise<void>
    user: IUser | null
}

export interface IUser {
    id?:string
    name: string
    email:string
    profile_image?:string
    account_type:string
    description:string
}

export interface IUserLogin{
    email:string,
    password:string
}

export interface LoginResponse {
    token:string
    id?:string
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
export interface IUserUpdate{
    name?:string
    email?:string
    cpf?:string
    contact_number?:string
    birthdate?:Date
    description?:string

}
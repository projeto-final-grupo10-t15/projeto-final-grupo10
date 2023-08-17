import { InputHTMLAttributes } from "react";
import {FieldError, UseFormRegisterReturn} from "react-hook-form"

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement>{
    label:string
    id:string
    type: "text" | "email" | "password"
    register?: UseFormRegisterReturn<string>
    error?: FieldError
}
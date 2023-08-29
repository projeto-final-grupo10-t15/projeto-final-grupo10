import { InputHTMLAttributes } from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

<<<<<<< HEAD
export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  type: "text" | "email" | "password" | "range";
  register?: UseFormRegisterReturn<string>;
  error?: FieldError;
  min?: string;
  max?: string;
}
=======
export interface IInputProps extends InputHTMLAttributes<HTMLInputElement>{
    label:string
    id:string
    type: "text" | "email" | "password"
    register?: UseFormRegisterReturn<string>
    error?: FieldError
    placeholder: string
}
>>>>>>> f8cb6d7f2a0b74af9178128e7032c54e77fd1572

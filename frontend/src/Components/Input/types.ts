import { InputHTMLAttributes } from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  id: string;
  type: "text" | "email" | "password" | "range" | "date" | "image";
  register?: UseFormRegisterReturn<string>;
  src?: string;
  error?: FieldError;
  min?: string;
  max?: string;
}

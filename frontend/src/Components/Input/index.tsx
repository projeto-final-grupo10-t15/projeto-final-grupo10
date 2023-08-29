import { IInputProps } from "./types";
import { StyledInput } from "./styles";

export const Input = ({
  label,
  register,
  error,
  type,
  id,
  placeholder,
}: IInputProps) => (
  <StyledInput>
    <label htmlFor={id}>{label}</label>
    <input type={type} id={id} {...register} placeholder={placeholder} />
    {error && <p className="error">{error.message}</p>}
  </StyledInput>
);

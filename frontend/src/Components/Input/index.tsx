import { IInputProps } from "./types";
import { StyledInput, StyledInputRange } from "./styles";

export const Input = ({
  label,
  register,
  error,
  type,
  id,
  placeholder,
  max,
  min,
  src,
}: IInputProps) => (
  <StyledInput>
    <label htmlFor={id}>{label}</label>
    <input
      type={type}
      id={id}
      max={max}
      min={min}
      src={src}
      {...register}
      placeholder={placeholder}
    />
    {error && <p className="error">{error.message}</p>}
  </StyledInput>
);

export const InputRange = ({
  label,
  register,
  error,
  type,
  id,
  placeholder,
  max,
  min,
  src,
  value,
  onChange
}: IInputProps) => (
  <StyledInputRange>
    <label htmlFor={id}>{label}</label>
    <input
      type={type}
      id={id}
      max={max}
      min={min}
      src={src}
      value={value}
      onChange={onChange}
      {...register}
      placeholder={placeholder}
    />
    {error && <p className="error">{error.message}</p>}
  </StyledInputRange>
);

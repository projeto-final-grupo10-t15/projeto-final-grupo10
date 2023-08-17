import { IInputProps } from "./types"

export const Input = ({label, register, error, type, id}:IInputProps) =>(
    <fieldset>
        <label htmlFor={id}>{label}</label>
        <input
            type={type}
            id = {id}
            {...register}
        />
        {error && <p className="error">{error.message}</p>}
    </fieldset>
)
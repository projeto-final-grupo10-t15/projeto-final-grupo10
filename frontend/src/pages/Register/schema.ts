import { z } from "zod";

export const RegisterSchema = z.object({
    name:z.string().nonempty("Este campo não pode ser vazio"),
    email:z.string().email("Deve ser um e-mail"),
    cpf:z.string().nonempty("Este campo não pode ser vazio"),
    contact_number: z.string().nonempty("Este campo não pode ser vazio"),
    birthdate: z.date(),
    description: z.string(),
    zipCode: z.string().nonempty("Este campo não pode ser vazio"),
    state: z.string().nonempty("Este campo não pode ser vazio"),
    city: z.string().nonempty("Este campo não pode ser vazio"),
    street: z.string().nonempty("Este campo não pode ser vazio"),
    number: z.string().nonempty("Este campo não pode ser vazio"),
    complement: z.string(),
    type_account:z.string().nonempty("Escolha uma das opções"),
    password: z.string().nonempty("Este campo não pode ser vazio"),
    confirmPassword: z.string().nonempty("Este campo não pode ser vazio")

})

export type RegisterData = z.infer<typeof RegisterSchema>

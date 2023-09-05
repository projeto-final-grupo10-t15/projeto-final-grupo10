import { z } from "zod";

export const RegisterSchema = z.object({
    name:z.string().nonempty("Este campo não pode ser vazio"),
    email:z.string().email("Deve ser um e-mail"),
    cpf:z.string().nonempty("Este campo não pode ser vazio"),
    contact_number: z.string().nonempty("Este campo não pode ser vazio"),
    birthdate: z.string(),
    description: z.string(),
    profile_image: z.string(),
    address: z.object({
        zipCode: z.string().nonempty("Este campo não pode ser vazio"),
        estate: z.string().nonempty("Este campo não pode ser vazio"),
        city: z.string().nonempty("Este campo não pode ser vazio"),
        street: z.string().nonempty("Este campo não pode ser vazio"),
        number: z.string().nonempty("Este campo não pode ser vazio"),
        complement: z.string(),

    }),
    account_type:z.string().nullable(),
    password: z.string().nonempty("Este campo não pode ser vazio"),
    confirmPassword: z.string().nonempty("Este campo não pode ser vazio")

})

export type RegisterData = z.infer<typeof RegisterSchema>

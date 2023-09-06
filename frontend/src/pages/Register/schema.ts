import { z } from "zod";

export const RegisterSchema = z.object({
  name: z.string().nonempty("O nome é obrigatório!"),
  email: z.string().email("O email é obrigatório!"),
  cpf: z.string().nonempty("Este campo não pode ser vazio"),
  contact_number: z
    .string()
    .min(11, "Confirme seu número!")
    .max(25, "É permitido no máximo 25 dígitos!")
    .nonempty("Este campo não pode ser vazio"),
  birthdate: z.date().or(z.string()),
  description: z.string().max(300),
  profile_image: z.string(),
  address: z.object({
    zipCode: z.string().nonempty("Este campo é obrigatório!"),
    estate: z.string().nonempty("Este campo é obrigatório!"),
    city: z.string().nonempty("Este campo é obrigatório!"),
    street: z.string().nonempty("Este campo é obrigatório!"),
    number: z.string().nonempty("Este campo é obrigatório!"),
    complement: z.string(),
  }),
  account_type: z.string().nullable(),
  password: z.string().nonempty("A senha é obrigatória!").min(4).max(50),
  confirmPassword: z.string().nonempty("Este campo é obrigatório!").min(4).max(50),
});

export type RegisterData = z.infer<typeof RegisterSchema>;

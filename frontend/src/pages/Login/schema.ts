import { z } from "zod";

export const LoginSchema = z.object({
  email: z.string().email("Deve ser um e-mail"),
  password: z.string().nonempty("Senha é obrigatória"),
});

export const WithoutPassword = LoginSchema.omit({
  password: true,
});

export type LoginData = z.infer<typeof LoginSchema>;

import { z } from "zod";

export const userSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
  profile_image: z.string(),
  description: z.string(),
  cpf: z.string(),
  bitrhdate: z.string(),
  contact_number: z.string(),
  account_type: z.string(),
});

export const userUpdateRequestSchema = userSchema.omit({id:true, password: true, profile_image: true, contact_number: true, account_type: true})

export const userUpdateResponseSchema = userSchema.omit({ password: true, profile_image: true, contact_number: true})

export const userRequestSchema = userSchema.omit({ id: true });

export const userResponseSchema = userSchema;

export const usersResponseSchema = userResponseSchema.array();

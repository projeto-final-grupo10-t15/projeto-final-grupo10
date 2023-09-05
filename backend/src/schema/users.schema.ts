import { z } from "zod";

const addressSchema = z.object({
  id: z.number(),
  zipCode: z.string().max(8),
  estate:z.string().max(2),
  city:z.string(),
  street:z.string(),
  number:z.string(),
  complement:z.string()
})
export const addressSchemaRequest = addressSchema.omit({
  id:true
})

export const userSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
  profile_image: z.string().nullable(),
  description: z.string(),
  cpf: z.string(),
  birthdate: z.coerce.date(),
  contact_number: z.string(),
  account_type: z.string(),
  address: addressSchema
});

export const userUpdateRequestSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  description: z.string(),
  cpf: z.string(),
  birthdate: z.date(),
  contact_number: z.string(),
}).partial()

export const userUpdateResponseSchema = userSchema.omit({
   id:true,
   password: true,
   profile_image:true,
   account_type:true,
   address:true,
  
  })

export const userRequestSchema = userSchema.omit({
   id: true 

  }).extend({
    address:addressSchemaRequest
  });

export const userResponseSchema = userSchema.omit({
  password:true
});

export const usersResponseSchema = userResponseSchema.array();

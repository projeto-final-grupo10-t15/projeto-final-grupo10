import { z } from "zod";

export const UpdateCarSchema = z.object({
  brand: z.string(),
  model: z.string(),
  year: z.number(),
  fuel_type: z.string(),
  mileage: z.number(),
  color: z.string(),
  FIPE_price: z.number().or(z.string()),
  price: z.number().or(z.string()),
  description: z.string(),
  cover_image: z.string(),
  first_image: z.string(),
}).partial()
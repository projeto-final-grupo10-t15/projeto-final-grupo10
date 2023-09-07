import { z } from "zod";

export const createCarSchema = z.object({
  brand: z.string(),
  model: z.string(),
  year: z.number().or(z.string()),
  fuel_type: z.string(),
  mileage: z.number().or(z.string()),
  color: z.string(),
  FIPE_price: z.number().or(z.string()),
  price: z.number().or(z.string()),
  description: z.string(),
  cover_image: z.string(),
  first_image: z.string(),
})
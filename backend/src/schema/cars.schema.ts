import { z } from "zod";

export const carSchema = z.object({
  id: z.number(),
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
  userId:z.number().nullish()
});

export const carRequestSchema = carSchema.omit({ 
  id: true,
  userId:true 
});

export const carResponseSchema = carSchema;

export const carsResponseSchema = carResponseSchema.array();

export const updateCarSchema = z.object({
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
}).partial()

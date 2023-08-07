import { z } from "zod";

export const carSchema = z.object({
  id: z.number(),
  brand: z.string(),
  model: z.string(),
  year: z.number(),
  fuel_type: z.string(),
  mileage: z.number(),
  color: z.string(),
  FIPE_price: z.number(),
  price: z.number(),
  description: z.string(),
  cover_image: z.string(),
  first_image: z.string(),
});

export const carRequestSchema = carSchema.omit({ id: true });

export const carResponseSchema = carSchema;

export const carsResponseSchema = carResponseSchema.array();

export const updateCarSchema = carRequestSchema;

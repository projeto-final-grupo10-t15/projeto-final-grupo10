import { z } from "zod";
import {
  carRequestSchema,
  carResponseSchema,
  carSchema,
  carsResponseSchema,
  updateCarSchema,
} from "../schema/cars.schema";

export type tCar = z.infer<typeof carSchema>;
export type tCarResponse = z.infer<typeof carResponseSchema>;
export type tCarRequest = z.infer<typeof carRequestSchema>;
export type tUpdateCar = z.infer<typeof updateCarSchema>;
export type tCarsResponse = z.infer<typeof carsResponseSchema>;

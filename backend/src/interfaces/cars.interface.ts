import { z } from "zod";
import {
  carRequestSchema,
  carResponseSchema,
  carSchema,
  carsResponseSchema,
  updateCarSchema,
} from "../schema/cars.schema";

export type TCar = z.infer<typeof carSchema>;
export type TCarResponse = z.infer<typeof carResponseSchema>;
export type TCarRequest = z.infer<typeof carRequestSchema>;
export type TCarUpdate = z.infer<typeof updateCarSchema>;
export type TCarsResponse = z.infer<typeof carsResponseSchema>;

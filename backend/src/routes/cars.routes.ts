import { Router } from "express";
import { validateRequestBody } from "../middlewares/validateMiddlewares/validateRequestBody.middleware";
import { carRequestSchema } from "../schema/cars.schema";
import { validateToken } from "../middlewares/validateMiddlewares/validateToken.middleware";

export const carsRoutes = Router()

carsRoutes.post('',validateToken, validateRequestBody(carRequestSchema))
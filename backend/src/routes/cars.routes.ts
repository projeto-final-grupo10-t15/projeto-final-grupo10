import { Router } from "express";
import { validateRequestBody } from "../middlewares/validateMiddlewares/validateRequestBody.middleware";
import { carRequestSchema } from "../schema/cars.schema";
import { validateToken } from "../middlewares/validateMiddlewares/validateToken.middleware";
import { createCarController, deleteCarController, listAllCarsController, listAllUsersCArsController, updateCarController } from "../controllers/cars.controller";
import { verifyIsOwner } from "../middlewares/verifyMiddlewares/verifyIsOwner.middleware";

export const carsRoutes:Router = Router()

carsRoutes.post('',validateToken, validateRequestBody(carRequestSchema),createCarController)
carsRoutes.get('/user/:id',validateToken,listAllUsersCArsController)
carsRoutes.get('',listAllCarsController)
carsRoutes.patch('/:id',validateToken,updateCarController)
carsRoutes.delete('/:id',validateToken,deleteCarController)
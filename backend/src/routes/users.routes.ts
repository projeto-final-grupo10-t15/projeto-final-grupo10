import { Router } from "express";
import { validateRequestBody } from "../middlewares/validateMiddlewares/validateRequestBody.middleware";
import { userRequestSchema, userUpdateRequestSchema } from "../schema/users.schema";
import { verifyEmailExists } from "../middlewares/verifyMiddlewares/verifyEmailExists.middleware";
import { createUserController, deleteUserController, getUserById } from "../controllers/users.controller";
import { validateToken } from "../middlewares/validateMiddlewares/validateToken.middleware";
import { updateUserController } from "../controllers/users.controller";
import { verifyIdExists } from "../middlewares/verifyMiddlewares/verifyIdExists.middlewate";

export const userRoutes:Router = Router()

userRoutes.post('',validateRequestBody(userRequestSchema),verifyEmailExists,createUserController)
userRoutes.get('/:id', getUserById)
userRoutes.patch('/:id',validateToken,validateRequestBody(userUpdateRequestSchema),updateUserController)
userRoutes.delete('/:id',validateToken,verifyIdExists,deleteUserController)
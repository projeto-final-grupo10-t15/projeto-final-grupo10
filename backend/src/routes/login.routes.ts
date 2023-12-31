import { Router } from "express";
import { validateRequestBody } from "../middlewares/validateMiddlewares/validateRequestBody.middleware";
import { loginRequestSchema } from "../schema/login.schema";
import { verifyIfEmailNotExists } from "../middlewares/verifyMiddlewares/verifyIfEmailNotExists.middleware";
import { createTokenController } from "../controllers/login.controller";

export const loginRoutes: Router = Router()

loginRoutes.post("", validateRequestBody(loginRequestSchema), verifyIfEmailNotExists, createTokenController)
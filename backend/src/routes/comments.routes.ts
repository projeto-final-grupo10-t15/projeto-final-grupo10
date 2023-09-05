import { Router } from "express";
import { validateToken } from "../middlewares/validateMiddlewares/validateToken.middleware";
import { createCommentController, deleteCommentsController, getCommentsController, updateCommentsController } from "../controllers/comments.controller";

export const commentsRoutes:Router = Router()

commentsRoutes.post('',validateToken,createCommentController)
commentsRoutes.get('/:id', getCommentsController)
commentsRoutes.patch('/:id',validateToken,updateCommentsController)
commentsRoutes.delete('/:id',validateToken,deleteCommentsController)
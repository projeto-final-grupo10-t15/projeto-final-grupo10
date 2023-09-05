import { Request, Response } from "express";
import { TComment, TCommentRequest, TCommentUpdate } from "../interfaces/comments.interface";
import { createCommentService } from "../services/comments/createComment.service";
import { getCommentsService } from "../services/comments/getComment.service";
import { updateCommentService } from "../services/comments/updateComment.service";
import { deleteCommentService } from "../services/comments/deleteComment.service";

export const createCommentController = async(req:Request, res:Response):Promise<Response> =>{
    const commentData:TCommentRequest = req.body 
    const userId = res.locals.id

    const newComment = await createCommentService(commentData,userId)

    return res.status(201).json(newComment)
}

export const getCommentsController = async(req:Request, res:Response):Promise<Response> =>{
    const carId = parseInt(req.params.id)
    const comments = await getCommentsService(carId)

    return res.json(comments)
}

export const updateCommentsController = async(req:Request, res:Response):Promise<Response> =>{
    const commentUpdateData:TCommentUpdate = req.body
    const userId = res.locals.id

    const id:number = parseInt(req.params.id)

    const newComment:TCommentUpdate = await updateCommentService(commentUpdateData, id, userId)

    return res.status(200).json(newComment)
}

export const deleteCommentsController = async(req:Request, res:Response):Promise<Response> =>{
    const commentId:number = parseInt(req.params.id)

    await deleteCommentService(commentId)

    return res.status(204).send()
}
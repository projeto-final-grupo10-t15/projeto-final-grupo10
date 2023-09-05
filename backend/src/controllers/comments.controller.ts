import { Request, Response } from "express";
import { TComment, TCommentRequest, TCommentUpdate } from "../interfaces/comments.interface";
import { createCommentService } from "../services/comments/createComment.service";
import { getCommentsService } from "../services/comments/getComment.service";
import { updateCommentService } from "../services/comments/updateComment.service";
import { deleteCommentService } from "../services/comments/deleteComment.service";

/**
 * @swagger
 * tags:
 *   name: Comments
 *   description: Operações relacionadas a comentários
 */

/**
 * @swagger
 * /api/comments:
 *   post:
 *     summary: Cria um novo comentário
 *     tags: [Comments]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/TCommentRequest'
 *     responses:
 *       201:
 *         description: Comentário criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TComment'
 *       500:
 *         description: Erro interno do servidor
 */
export const createCommentController = async(req:Request, res:Response):Promise<Response> =>{
    const commentData:TCommentRequest = req.body 
    const userId = res.locals.id

    const newComment = await createCommentService(commentData,userId)

    return res.status(201).json(newComment)
}

/**
 * @swagger
 * /api/comments/{id}:
 *   get:
 *     summary: Retorna os comentários de um carro específico
 *     tags: [Comments]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Comentários do carro
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TComment'
 *       500:
 *         description: Erro interno do servidor
 */
export const getCommentsController = async(req:Request, res:Response):Promise<Response> =>{
    const carId = parseInt(req.params.id)
    const comments = await getCommentsService(carId)

    return res.json(comments)
}

/**
 * @swagger
 * /api/comments/{id}:
 *   patch:
 *     summary: Atualiza um comentário existente
 *     tags: [Comments]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/TCommentUpdate'
 *     responses:
 *       200:
 *         description: Comentário atualizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TCommentUpdate'
 *       404:
 *         description: Comentário não encontrado
 *       500:
 *         description: Erro interno do servidor
 */
export const updateCommentsController = async(req:Request, res:Response):Promise<Response> =>{
    const commentUpdateData:TCommentUpdate = req.body
    const userId = res.locals.id

    const id:number = parseInt(req.params.id)

    const newComment:TCommentUpdate = await updateCommentService(commentUpdateData, id, userId)

    return res.status(200).json(newComment)
}

/**
 * @swagger
 * /api/comments/{id}:
 *   delete:
 *     summary: Exclui um comentário existente
 *     tags: [Comments]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Comentário excluído com sucesso
 *       404:
 *         description: Comentário não encontrado
 *       500:
 *         description: Erro interno do servidor
 */
export const deleteCommentsController = async(req:Request, res:Response):Promise<Response> =>{
    const commentId:number = parseInt(req.params.id)

    await deleteCommentService(commentId)

    return res.status(204).send()
}
import { TUserRequest, TUserUpdateRequest } from "../interfaces/users.interface";
import { Request, Response } from "express";
import { createuserService } from "../services/users/registerUser.service";
import { deleteUserService } from "../services/users/deleteUser.service";
import { User } from "../entities/users.entities";
import { updateUserService } from "../services/users/updateUser.service";
import { getUserbyIdService } from "../services/users/getUserbyIdService.service";

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: Operações relacionadas a usuários
 */

/**
 * @swagger
 * /api/users:
 *   post:
 *     summary: Cria um novo usuário
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/TUserRequest'
 *     responses:
 *       201:
 *         description: Usuário criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       500:
 *         description: Erro interno do servidor
 */
export const createUserController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const userData: TUserRequest = request.body;

  const newUser = await createuserService(userData);

  return response.status(201).json(newUser);
};

/**
 * @swagger
 * /api/users/{id}:
 *   delete:
 *     summary: Exclui um usuário existente
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Usuário excluído com sucesso
 *       404:
 *         description: Usuário não encontrado
 *       500:
 *         description: Erro interno do servidor
 */
export const deleteUserController = async (req: Request, res: Response): Promise<Response<User>> => {
  const userId: number = parseInt(req.params.id)

  await deleteUserService(userId)

  return res.status(204).send()
}
/**
 * @swagger
 * /api/users/{id}:
 *   put:
 *     summary: Atualiza um usuário existente
 *     tags: [Users]
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
 *             $ref: '#/components/schemas/TUserUpdateRequest'
 *     responses:
 *       200:
 *         description: Usuário atualizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       404:
 *         description: Usuário não encontrado
 *       500:
 *         description: Erro interno do servidor
 */
export const updateUserController = async (req: Request, res: Response): Promise<Response<User>> => {
  const userId: number = parseInt(req.params.id)
  const newUserData: TUserUpdateRequest = req.body

  const updatedUser: TUserUpdateRequest = await updateUserService(userId, newUserData)

  return res.status(200).json(updatedUser)
}

export const getUserById = async (req: Request, res: Response): Promise<Response<User>> =>{
  const userId: number = parseInt(req.params.id)
  const user = await getUserbyIdService(userId)

  return res.status(200).json(user)
}
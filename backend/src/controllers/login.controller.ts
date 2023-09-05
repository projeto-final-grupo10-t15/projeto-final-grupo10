import { Request, Response } from "express";
import { tLoginData } from "../services/users/logUser.service";
import { createTokenService } from "../services/users/logUser.service";


/**
 * @swagger
 * tags:
 *   name: Authentication
 *   description: Operações de autenticação de usuário
 */

/**
 * @swagger
 * /api/token:
 *   post:
 *     summary: Cria um token de autenticação para um usuário
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/tLoginData'
 *     responses:
 *       200:
 *         description: Token de autenticação criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *       401:
 *         description: Credenciais inválidas
 *       500:
 *         description: Erro interno do servidor
 */
export const createTokenController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const loginData: tLoginData = req.body;

  const token = await createTokenService(loginData);

  return res.status(200).json(token);
};
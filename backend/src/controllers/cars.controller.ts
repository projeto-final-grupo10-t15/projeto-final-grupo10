import { Request, Response } from "express";
import { TCarRequest, TCarUpdate } from "../interfaces/cars.interface";
import { createCarService } from "../services/cars/createCar.service";
import { updateCarrService } from "../services/cars/updateCar.service";
import { deleteCarService } from "../services/cars/deleteCar.service";
import { listUserCarsService } from "../services/cars/listUserCars.service";
import { listAllCarsService } from "../services/cars/listAllCars.service";
import swagger from "../../swagger";

/**
 * @swagger
 * tags:
 *   name: Cars
 *   description: Operações relacionadas a carros
 */

/**
 * @swagger
 * /api/cars:
 *   post:
 *     summary: Cria um novo carro
 *     tags: [Cars]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/TCarRequest'
 *     responses:
 *       201:
 *         description: Carro criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Car'
 *       500:
 *         description: Erro interno do servidor
 */
export const createCarController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const carsData: TCarRequest = request.body;
  const userId:number = response.locals.userId

  const newCar = await createCarService(carsData,userId);

  return response.status(201).json(newCar);
};
/**
 * @swagger
 * /api/users/{id}/cars:
 *   get:
 *     summary: Retorna a lista de carros de um usuário
 *     tags: [Cars]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Lista de carros do usuário
 *       404:
 *         description: Usuário não encontrado
 *       500:
 *         description: Erro interno do servidor
 */
export const listAllUsersCArsController = async (
  request: Request,
  response: Response,
): Promise<Response> => {
  const userId = parseInt(request.params.id)
  const usersCars = await listUserCarsService(userId);
  return response.json(usersCars);
};
/**
 * @swagger
 * /api/cars/{id}:
 *   put:
 *     summary: Atualiza um carro existente
 *     tags: [Cars]
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
 *             $ref: '#/components/schemas/TCarUpdate'
 *     responses:
 *       200:
 *         description: Carro atualizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Car'
 *       500:
 *         description: Erro interno do servidor
 */
export const updateCarController = async ( request: Request,response: Response): Promise<Response> => {
  const carData: TCarUpdate = request.body;
  const carId: number = parseInt(request.params.id);
  const updateCar = await updateCarrService(carData, carId);

  return response.json(updateCar);
};
/**
 * @swagger
 * /api/cars/{id}:
 *   delete:
 *     summary: Exclui um carro existente
 *     tags: [Cars]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Carro excluído com sucesso
 *       404:
 *         description: Carro não encontrado
 *       500:
 *         description: Erro interno do servidor
 */
export const deleteCarController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const carId: number = +request.params.id;

  await deleteCarService(carId);

  return response.status(204).send();
};
/**
 * @swagger
 * /api/cars:
 *   get:
 *     summary: Retorna a lista de todos os carros
 *     tags: [Cars]
 *     responses:
 *       200:
 *         description: Lista de carros
 *       500:
 *         description: Erro interno do servidor
 */
export const listAllCarsController = async(req:Request, res:Response):Promise<Response>=>{
  const cars = await listAllCarsService()
  return res.json(cars)
}
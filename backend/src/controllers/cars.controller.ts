import { Request, Response } from "express";
import { TCarRequest, TCarUpdate } from "../interfaces/cars.interface";
import { createCarService } from "../services/cars/createCar.service";
import { updateCarrService } from "../services/cars/updateCar.service";
import { deleteCarService } from "../services/cars/deleteCar.service";
import { listUserCarsService } from "../services/cars/listUserCars.service";
import { listAllCarsService } from "../services/cars/listAllCars.service";

export const createCarController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const carsData: TCarRequest = request.body;
  const userId:number = response.locals.userId

  const newCar = await createCarService(carsData,userId);

  return response.status(201).json(newCar);
};

export const listAllUsersCArsController = async (
  request: Request,
  response: Response,
): Promise<Response> => {
  const userId = parseInt(request.params.id)
  const usersCars = await listUserCarsService(userId);
  return response.json(usersCars);
};

export const updateCarController = async ( request: Request,response: Response): Promise<Response> => {
  const carData: TCarUpdate = request.body;
  const carId: number = parseInt(request.params.id);
  const updateCar = await updateCarrService(carData, carId);

  return response.json(updateCar);
};

export const deleteCarController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const carId: number = +request.params.id;

  await deleteCarService(carId);

  return response.status(204).send();
};

export const listAllCarsController = async(req:Request, res:Response):Promise<Response>=>{
  const cars = await listAllCarsService()
  return res.json(cars)
}
import { Request, Response } from "express";
import { TCarRequest, TCarUpdate } from "../interfaces/cars.interface";
import { createCarService } from "../services/cars/createCar.service";
import { updateCarrService } from "../services/cars/updateCar.service";
import { deleteCarService } from "../services/cars/deleteCar.service";
import { listUserCarsService } from "../services/cars/listUserCars.service";

export const createCarController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const carsData: TCarRequest = request.body;

  const newCar = await createCarService(carsData);

  return response.status(201).json(newCar);
};

export const getAllUsersController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const usersCars = await listUserCarsService();
  return response.json(usersCars);
};

export const updateUserController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const carData: TCarUpdate = request.body;
  const carId: number = +request.params.id;
  const updateUser = await updateCarrService(carData, carId);

  return response.json(updateUser);
};

export const deleteUserController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const userId: number = +request.params.id;

  await deleteUserService(userId);

  return response.status(204).send();
};

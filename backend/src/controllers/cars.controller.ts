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

export const listAllUsersCArsController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const usersCars = await listUserCarsService();
  return response.json(usersCars);
};

export const updateCarController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const carData: TCarUpdate = request.body;
  const carId: number = +request.params.id;
  const updateCar = await updateCarrService(carData, carId);

  return response.json(updateCar);
};

export const deleteCArController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const carId: number = +request.params.id;

  await deleteCarService(carId);

  return response.status(204).send();
};

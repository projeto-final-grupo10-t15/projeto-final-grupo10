import { Repository } from "typeorm";
import { Car } from "../../entities/cars.entities";
import { AppDataSource } from "../../data-source";
import { carResponseSchema } from "../../schema/cars.schema";
import { TCarRequest, TCarResponse } from "../../interfaces/cars.interface";

export const createCarService = async (
  carData: TCarRequest
): Promise<TCarResponse> => {
  const carRepo: Repository<Car> = AppDataSource.getRepository(Car);

  const car: Car = carRepo.create(carData);

  await carRepo.save(car);

  const returnCar: TCarResponse = carResponseSchema.parse(car);

  return returnCar;
};

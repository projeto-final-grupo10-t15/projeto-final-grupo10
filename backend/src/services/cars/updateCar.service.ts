import { Repository } from "typeorm";

import { TCarUpdate, TCarResponse } from "../../interfaces/cars.interface";

import { Car } from "../../entities/cars.entities";
import { AppDataSource } from "../../data-source";
import { carResponseSchema } from "../../schema/cars.schema";

export const updateCarrService = async (
  carData: TCarUpdate,
  carId: number
): Promise<TCarResponse> => {
  const carRepository: Repository<Car> = AppDataSource.getRepository(Car);

  const oldCar: Car | null = await carRepository.findOne({
    where: {
      id: carId,
    },
  });

  const car: Car = carRepository.create({
    ...oldCar,
    ...carData,
  });

  await carRepository.save(car);
  const updateCar = carResponseSchema.parse(car);

  return updateCar;
};

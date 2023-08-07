import { Repository } from "typeorm";
import { TCarResponse, TUpdateCar } from "../../interface/cars.interface";
import { Car } from "../../entities/cars.entities";
import { AppDataSource } from "../../data-source";
import { carResponseSchema } from "../../schemas/car.schema";

export const updateCarrService = async (
  carData: TUpdateCar,
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

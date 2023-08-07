import { Repository } from "typeorm";
import { Car } from "../../entities/cars.entities";
import { AppDataSource } from "../../data-source";

export const deleteCarService = async (carId: number): Promise<void> => {
  const carRepository: Repository<Car> = AppDataSource.getRepository(Car);
  const car = await carRepository.findOneBy({
    id: carId,
  });
  await carRepository.softRemove(car!);
};

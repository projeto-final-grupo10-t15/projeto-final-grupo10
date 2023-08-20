import { Repository } from "typeorm";
import { Car } from "../../entities/cars.entities";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/users.entities";

export const listUserCarsService = async (
  userId: number
): Promise<Car | Car[]> => {
  const carRepo: Repository<Car> = AppDataSource.getRepository(Car);

  const userRepo: Repository<User> = AppDataSource.getRepository(User);

  const user: any = await userRepo.findOneBy({ id: userId });

  const cars: Car[] = await carRepo.findBy({ user: user });

  return cars;
};

import { Repository } from "typeorm";
import { Car } from "../../entities/cars.entities";
import { AppDataSource } from "../../data-source";
import { carResponseSchema } from "../../schema/cars.schema";
import { TCarRequest, TCarResponse } from "../../interfaces/cars.interface";
import { User } from "../../entities/users.entities";

export const createCarService = async (
  carData: TCarRequest,
  userId:number
): Promise<TCarResponse> => {
  const userRepo:Repository<User> = AppDataSource.getRepository(User)
  const carRepo: Repository<Car> = AppDataSource.getRepository(Car);

  const user:User | null = await userRepo.findOne({
    where:{
      id:userId
    }
  })
  const car: Car = carRepo.create({
    ...carData,
    user:user!
  });

  await carRepo.save(car);

  const returnCar: TCarResponse = carResponseSchema.parse(car);

  return returnCar;
};

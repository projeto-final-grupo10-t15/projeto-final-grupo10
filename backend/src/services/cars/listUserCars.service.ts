import { Repository } from "typeorm";
import { Car } from "../../entities/cars.entities";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/users.entities";
import { AppError } from "../../error";

export const listUserCarsService = async (
  userId: number
): Promise<User> => {
  const carRepo: Repository<Car> = AppDataSource.getRepository(Car);
  const userRepo:Repository<User> = AppDataSource.getRepository(User)

  const user:User | null = await userRepo.findOne({
    where:{
      id:userId
    },relations:{
      cars:true
    }
  })
  if(!user){
    throw new AppError("User not found", 404)
  }
  return user
};

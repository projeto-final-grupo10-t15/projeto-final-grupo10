import { Repository } from "typeorm";
import { Car } from "../../entities/cars.entities";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../error";
import { Comments } from "../../entities/comments.entities";

export const deleteCarService = async (carId: number): Promise<void> => {
  const carRepository: Repository<Car> = AppDataSource.getRepository(Car);
  const commentRepository:Repository<Comments> = AppDataSource.getRepository(Comments)
  const car = await carRepository.findOne({
    where:{
      id:carId
    },relations:{
      comments:true
    }})
    if (car) {
      await Promise.all(car.comments.map(async (comment) => {
        await commentRepository.remove(comment);
      }));
      await carRepository.remove(car);
    }
  
};

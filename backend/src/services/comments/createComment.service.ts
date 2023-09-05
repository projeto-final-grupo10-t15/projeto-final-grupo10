import { Repository } from "typeorm";
import { TCommentRequest } from "../../interfaces/comments.interface";
import { AppDataSource } from "../../data-source";
import { Comments } from "../../entities/comments.entities";
import { User } from "../../entities/users.entities";
import { Car } from "../../entities/cars.entities";
import { AppError } from "../../error";

export const createCommentService= async(commentData:TCommentRequest, userId:number):Promise<Comments> =>{
    const commentRepo:Repository<Comments> = AppDataSource.getRepository(Comments)
    const carRepo:Repository<Car> = AppDataSource.getRepository(Car)
    const userRepo:Repository<User> = AppDataSource.getRepository(User)

    const user:User | null = await userRepo.findOne({
        where:{
          id:userId
        }
      })
      const car:Car | null = await carRepo.findOne({
        where:{
          id:commentData.carId
        }
      })
      if(!car){
        throw new AppError("Announce not found", 404)
      }
    const comment:Comments  = commentRepo.create({
        ...commentData,
        user:user!,
        car:car!
    })

    await commentRepo.save(comment)

    return comment
}
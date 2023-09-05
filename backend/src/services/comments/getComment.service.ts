import { Repository } from "typeorm";
import { Comments } from "../../entities/comments.entities";
import { AppDataSource } from "../../data-source";
import { Car } from "../../entities/cars.entities";
import { AppError } from "../../error";

export const getCommentsService = async(carId:number):Promise<Car>=>{
    const commentRepo:Repository<Comments> = AppDataSource.getRepository(Comments)
    const carRepo:Repository<Car> = AppDataSource.getRepository(Car)

    const car:Car | null = await carRepo.findOne({
        where:{
            id:carId
        },relations:{
            comments:true,
            user:true
        }
    })
    if(!car){
        throw new AppError("Announce not found", 404)
    }
    
    return car
}
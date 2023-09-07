import { Repository } from "typeorm";
import { User } from "../../entities/users.entities";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../error";

export const getUserbyIdService = async(userId:number):Promise<User>=>{
    const userRepo:Repository<User> = AppDataSource.getRepository(User)
    const user:User | null = await userRepo.findOne({
        where:{
            id:userId
        }
    })
    if(!user){
        throw new AppError("User not found", 404)
    }

    return user

}
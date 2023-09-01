import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { User } from "../../entities/users.entities";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../error";

export const verifyIdExists = async(req:Request,res:Response,next:NextFunction):Promise<Response|void> =>{
    const id:number = parseInt(req.params.id)

    const userRepo:Repository<User> = AppDataSource.getRepository(User)

    const user:User|null = await userRepo.findOne({
        where:{
            id:id
        }
    })

    if(!user){
        throw new AppError('User not found',404)
    }

    return next()
}


import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { User } from "../../entities/users.entities";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../error";

export const verifyIsOwner = async(req:Request,res:Response, next:NextFunction):Promise<void>=>{
    const userRepo:Repository<User> = AppDataSource.getRepository(User)

    const paramsId:number = parseInt(req.params.id)
    const userId:number = parseInt(res.locals.userId)

    const user:User|null = await userRepo.findOne({
        where:{
            id:userId
        }
    })

    if(!user){
        throw new AppError('User not found', 404)
    }
    if(user.id !== userId){
        throw new AppError('Insufficient permission', 403)
    }

    return next()
}
import { NextFunction, Request, Response } from "express"
import { Repository } from "typeorm"
import { User } from "../../entities/users.entities"
import { AppDataSource } from "../../data-source"
import { AppError } from "../../error"

type TEmail={
    email:string
}

export const verifyEmailExists = async (req:Request,res:Response,next:NextFunction):Promise<Response|void>=>{
    const {email}:TEmail = req.body

    const userRepo:Repository<User> = AppDataSource.getRepository(User)
    const user:User | null = await userRepo.findOne({
        where:{
            email:email
        }
    })

    if(user){
        throw new AppError('Email already exists',409)
    }

    return next()
}


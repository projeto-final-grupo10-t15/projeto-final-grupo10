import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/users.entities";
import { AppError } from "../../error";

export const verifyIfEmailNotExists = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const userEmail: string = req.body.email;
    const userRepo: Repository<User> = AppDataSource.getRepository(User)

    const user = await userRepo.findOneBy({
        email: userEmail
    })

    if(!user){
        throw new AppError("Usuário não existente", 401)
    }

    return next()
}
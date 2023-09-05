import {compare} from "bcryptjs"
import { Repository } from "typeorm";
import { User } from "../../entities/users.entities";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../error";
import jwt from "jsonwebtoken"

type tLoginUser = {
    token: string;
}

export type tLoginData = {
    email: string;
    password: string;
}

export const createTokenService = async (loginData: tLoginData) => {
    const userRepo: Repository<User> = AppDataSource.getRepository(User);

    const user: User|null = await userRepo.findOneBy({
        email: loginData.email
    })

    if(!user){
        throw new AppError("Credenciais inválidas", 403)
    }

    const passIsEqual: boolean = await compare(loginData.password, user.password)

    if(!passIsEqual){
        throw new AppError("Credenciais inválidas", 403)
    }

    const token = jwt.sign({name: user.name}, process.env.SECRET_KEY!, {
        expiresIn:"24h",
        subject: String(user.id)
    })

    return {token, id:user.id}
}
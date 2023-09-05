import { DeepPartial, Repository } from "typeorm";
import { TUserUpdateRequest, TUserUpdateResponse } from "../../interfaces/users.interface";
import { User } from "../../entities/users.entities";
import { AppDataSource } from "../../data-source";
import { userUpdateResponseSchema, usersResponseSchema } from "../../schema/users.schema";
import { AppError } from "../../error";


export const updateUserService = async (userId: number, newUserData: TUserUpdateRequest): Promise<TUserUpdateResponse> => {
    const userRepo: Repository<User> = AppDataSource.getRepository(User)

    const userData: User|null = await userRepo.findOneBy({id: userId})

    if(userData !== null){
        if(newUserData.name !== undefined){
            userData.name = newUserData.name
        }
        if(newUserData.email !== undefined){
            userData.email = newUserData.email
        } 
        if(newUserData.cpf !== undefined){
            userData.cpf = newUserData.cpf
        }
        if(newUserData.contact_number !== undefined){
            userData.contact_number = newUserData.contact_number
        }
        if(newUserData.birthdate !==undefined){
            userData.birthdate = newUserData.birthdate
        }
        if(newUserData.description !== undefined){
            userData.description = newUserData.description
        }
               
        userRepo.merge(userData, userData)
    
        const updatedUser = await userRepo.save(userData)
    
        const returnUser: TUserUpdateResponse = userUpdateResponseSchema.parse(updatedUser)
    
        return returnUser
    }else{
        throw new AppError("User not found", 404)
    }
    
}
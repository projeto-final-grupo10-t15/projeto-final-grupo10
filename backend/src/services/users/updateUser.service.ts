import { Repository } from "typeorm";
import { TUserUpdateRequest, TUserUpdateResponse } from "../../interfaces/users.interface";
import { User } from "../../entities/users.entities";
import { AppDataSource } from "../../data-source";
import { userUpdateResponseSchema, usersResponseSchema } from "../../schema/users.schema";

export const updateUserService = async (userId: number, newUserData: TUserUpdateRequest): Promise<TUserUpdateResponse> => {
    const userRepo: Repository<User> = AppDataSource.getRepository(User)

    const userData: User|null = await userRepo.findOneBy({id: userId})

    const updateUser: User = userRepo.create({...userData, ...newUserData})

    await userRepo.save(updateUser)

    const returnUser: TUserUpdateResponse = userUpdateResponseSchema.parse(updateUser)

    return returnUser
}
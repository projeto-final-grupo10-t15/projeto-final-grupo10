import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/users.entities";
import { TUserRequest, TUserResponse } from "../../interfaces/users.interface";
import { userResponseSchema } from "../../schema/users.schema";

export const createuserService = async (
  userData: TUserRequest
): Promise<TUserResponse> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user: User = userRepository.create(userData);

  await userRepository.save(user);

  const newUser: TUserResponse = userResponseSchema.parse(user);
  return newUser;
};

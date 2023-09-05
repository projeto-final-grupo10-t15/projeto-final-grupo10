import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/users.entities";
import { TAddressRequest, TUserRequest, TUserResponse } from "../../interfaces/users.interface";
import { userResponseSchema } from "../../schema/users.schema";
import { Address } from "../../entities/addresses.entities";

export const createuserService = async (userData: TUserRequest): Promise<TUserResponse> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);
  const addressRepository:Repository<Address> = AppDataSource.getRepository(Address)

  const addressData:TAddressRequest = userData.address
  const addressCreate:Address = addressRepository.create({
    ...addressData
  })
  await addressRepository.save(addressCreate)
  const user: User = userRepository.create({
    ...userData,
    address:addressCreate
  });

  await userRepository.save(user);

  const newUser: TUserResponse = userResponseSchema.parse(user);
  return newUser;
};

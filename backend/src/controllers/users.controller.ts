import { TUserRequest, TUserUpdateRequest } from "../interfaces/users.interface";
import { Request, Response } from "express";
import { createuserService } from "../services/users/registerUser.service";
import { deleteUserService } from "../services/users/deleteUser.service";
import { User } from "../entities/users.entities";
import { updateUserService } from "../services/users/updateUser.service";

export const createUserController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const userData: TUserRequest = request.body;

  const newUser = await createuserService(userData);

  return response.status(201).json(newUser);
};


export const deleteUserController = async (req: Request, res: Response): Promise<Response<User>> => {
  const userId: number = parseInt(req.params.id)

  await deleteUserService(userId)

  return res.status(204).send()
}

export const updateUserController = async (req: Request, res: Response): Promise<Response<User>> => {
  const userId: number = parseInt(req.params.id)
  const newUserData: TUserUpdateRequest = req.body

  const updatedUser: TUserUpdateRequest = await updateUserService(userId, newUserData)

  return res.status(200).json(updatedUser)
}
import { TUserRequest } from "../interfaces/users.interface";
import { Request, Response } from "express";
import { createuserService } from "../services/users/registerUser.service";

export const createUserController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const userData: TUserRequest = request.body;

  const newUser = await createuserService(userData);

  return response.status(201).json(newUser);
};

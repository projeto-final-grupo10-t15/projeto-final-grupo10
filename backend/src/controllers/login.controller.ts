import { Request, Response } from "express";
import { tLoginData } from "../services/users/logUser.service";
import { createTokenService } from "../services/users/logUser.service";

export const createTokenController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const loginData: tLoginData = req.body;

  const login = await createTokenService(loginData);

  return res.status(200).json(login);
};
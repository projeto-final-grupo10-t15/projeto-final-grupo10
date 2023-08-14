import { z } from "zod";
import {
  userRequestSchema,
  userResponseSchema,
  userSchema,
  usersResponseSchema,
} from "../schema/users.schema";

export type TUser = z.infer<typeof userSchema>;

export type TUserResponse = z.infer<typeof userResponseSchema>;

export type TUserRequest = z.infer<typeof userRequestSchema>;

export type TUsersResponse = z.infer<typeof usersResponseSchema>;

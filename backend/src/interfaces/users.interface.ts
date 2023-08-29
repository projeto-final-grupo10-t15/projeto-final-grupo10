import { z } from "zod";
import {
  userRequestSchema,
  userResponseSchema,
  userSchema,
  userUpdateRequestSchema,

  userUpdateResponseSchema,

  usersResponseSchema,
} from "../schema/users.schema";

export type TUser = z.infer<typeof userSchema>;

export type TUserResponse = z.infer<typeof userResponseSchema>;

export type TUserRequest = z.infer<typeof userRequestSchema>;

export type TUsersResponse = z.infer<typeof usersResponseSchema>;

export type TUserUpdateRequest = z.infer<typeof userUpdateRequestSchema>

export type TUserUpdateResponse = z.infer<typeof userUpdateResponseSchema>

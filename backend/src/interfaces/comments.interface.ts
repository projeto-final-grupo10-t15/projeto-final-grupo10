import { z } from "zod";
import { commentSchema, commentSchemaRequest, commentUpdateResponseSchema, commentUpdateSchema, commentsResponseSchema } from "../schema/comments.schema";
import { DeepPartial } from "typeorm";

export type TComment = z.infer<typeof commentSchema>

export type TCommentRequest = z.infer<typeof commentSchemaRequest>

export type TCommentsResponse = z.infer<typeof commentsResponseSchema>

export type TCommentsUpdateResponse = z.infer<typeof commentUpdateResponseSchema>

export type TCommentUpdate = z.infer<typeof commentUpdateSchema>
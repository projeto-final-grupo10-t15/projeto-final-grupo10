import { z } from "zod";

export const commentSchema = z.object({
    id:z.number(),
    comments:z.string(),
    userId: z.number(),
    carId: z.number()
})

export const commentSchemaRequest = commentSchema.omit({
    id:true,
    userId:true
})

export const commentsResponseSchema = commentSchema.array()

export const commentUpdateSchema = z.object({
    carId: z.number(),
    comments:z.string(),
    userId: z.number()
}).partial()

export const commentUpdateResponseSchema = commentSchema.omit({
    id:true,
    userId:true
})
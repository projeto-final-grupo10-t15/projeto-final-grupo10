import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { Comments } from "../../entities/comments.entities"

export const deleteCommentService = async(commentId:number):Promise<void>=>{
    const commentRepo:Repository<Comments> = AppDataSource.getRepository(Comments)

    const deletedComment:Comments|null = await commentRepo.findOne({
        where:{
            id:commentId
        }
    })
    await commentRepo.remove(deletedComment!)
}
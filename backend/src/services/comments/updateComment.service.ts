import { Repository } from "typeorm"
import { Comments } from "../../entities/comments.entities"
import { TComment, TCommentUpdate, TCommentsUpdateResponse } from "../../interfaces/comments.interface"
import { AppDataSource } from "../../data-source"
import { Car } from "../../entities/cars.entities"
import { User } from "../../entities/users.entities"
import { AppError } from "../../error"

export const updateCommentService = async(commentData:TCommentUpdate, commentId:number, userId:number):Promise<Comments>=>{
        const commentRepo:Repository<Comments> = AppDataSource.getRepository(Comments)
        const carRepo:Repository<Car> = AppDataSource.getRepository(Car)
        const userRepo:Repository<User> = AppDataSource.getRepository(User)

        const user:User| null =  await userRepo.findOneBy({id:userId!})
        if(!user){
            throw new AppError('User not found', 404)
        }
        

        const car:Car | null = await carRepo.findOneBy({id:commentData.carId!})
        if(!car){
            throw new AppError("Announce not found", 404)
        }
        
        const oldComment:Comments|null = await commentRepo.findOneBy({
            id:commentId
        })
        if(!oldComment){
            throw new AppError("Comment not found", 404)
        }
        oldComment.user = user
        oldComment.car = car
        if(commentData.comments){
            oldComment.comments = commentData.comments
        }
        const newComment: Comments = await commentRepo.save(oldComment) 

      
        return newComment
    
}
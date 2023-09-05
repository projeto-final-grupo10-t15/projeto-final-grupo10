import "reflect-metadata"
import "express-async-errors"
import express from "express"
import { loginRoutes } from "./routes/login.routes"
import {handleErrors} from "./error"
import { userRoutes } from "./routes/users.routes"
import { carsRoutes } from "./routes/cars.routes"
import { commentsRoutes } from "./routes/comments.routes"

export const app = express()
app.use(express.json())

app.use('/login',loginRoutes)
app.use('/users',userRoutes)
app.use('/cars',carsRoutes)
app.use('/comments',commentsRoutes)
app.use(handleErrors)
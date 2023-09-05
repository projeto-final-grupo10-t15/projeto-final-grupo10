import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { Car } from "../../entities/cars.entities"

export const listAllCarsService= async():Promise<Car[]>=>{
    const carRepo:Repository<Car> = AppDataSource.getRepository(Car)
    const cars:Car[] = await carRepo.find()

    return cars
}
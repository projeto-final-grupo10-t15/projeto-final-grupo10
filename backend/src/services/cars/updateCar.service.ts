import { Repository } from "typeorm";
import { TCarUpdate, TCarResponse } from "../../interfaces/cars.interface";
import { Car } from "../../entities/cars.entities";
import { AppDataSource } from "../../data-source";
import { carResponseSchema } from "../../schema/cars.schema";
import { AppError } from "../../error";

export const updateCarrService = async (carData: TCarUpdate,carId: number): Promise<TCarResponse> => {
  const carRepository: Repository<Car> = AppDataSource.getRepository(Car);

  const oldCar: Car | null = await carRepository.findOneBy({id: carId,});

  if(oldCar !== null){
    if(carData.brand !== undefined){
      oldCar.brand = carData.brand
    }
    if(carData.FIPE_price !== undefined){
      oldCar.FIPE_price = carData.FIPE_price
    }
    if(carData.color !== undefined){
      oldCar.color = carData.color
    }
    if(carData.cover_image !== undefined){
      oldCar.cover_image = carData.cover_image
    }
    if(carData.description !== undefined){
      oldCar.description = carData.description
    }
    if(carData.first_image !== undefined){
      oldCar.first_image = carData.first_image
    }
    if(carData.fuel_type !== undefined){
      oldCar.fuel_type = carData.fuel_type
    }
    if(carData.mileage !== undefined){
      oldCar.mileage = carData.mileage
    }
    if(carData.model !== undefined){
      oldCar.model = carData.model
    }
    if(carData.price !== undefined){
      oldCar.price = carData.price
    }
    if(carData.year !== undefined){
      oldCar.year = carData.year
    }
    carRepository.merge(oldCar, oldCar)
    const updatedCar = await carRepository.save(oldCar);
    const returnCar:TCarResponse = carResponseSchema.parse(updatedCar);
    return returnCar;
  }else{
    throw new AppError("Announce not found", 404)
  }


};

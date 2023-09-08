import { createContext, useEffect, useState } from "react";
import { ICars, iChildren } from "./interfaces";
import { api } from "../../services/api";
import { IUpdateCar } from "../../Components/UpdateCarForm/interfaces";

type CarContextProps = {
  cars: ICars[] | [];
  setCars: React.Dispatch<React.SetStateAction<ICars[] | []>>;
  filters: ICars[] | null;
  setFilters: React.Dispatch<React.SetStateAction<ICars[] | null>>;
  filterValues: number | string;
  setFilterValues: React.Dispatch<React.SetStateAction<number | string>>;
  ApplyFilterCar: () => void;
  createCar: (data: ICars) => void;
  updateCar: (id: number | null, data: IUpdateCar) => void;
  listMyCars: (id: number | null) => void;
  listAllCars: () => void;
  deleteCar: (id: number) => void;
  
};

const CarContext = createContext<CarContextProps>({} as CarContextProps);

const CarProvider = ({ children }: iChildren) => {
  const [cars, setCars] = useState<ICars[] | []>([]);
  const [filters, setFilters] = useState<ICars[] | null>([]);
  const [filterValues, setFilterValues] = useState<number | string>(0);



  useEffect(() => {
    const Cars = async () => {
      
      const response = await api.get<ICars[]>("/cars");
      setCars(response.data);
    };
    Cars();
  }, []);

  const ApplyFilterCar = () => {
    let filteredCars = cars;

    filters?.map((filter) => {
      switch (true) {
        case Boolean(filter.brand):
          filteredCars = filteredCars.filter(
            (cars) => cars.brand === filter.brand
          );
          break;
        case Boolean(filter.model):
          filteredCars = filteredCars.filter(
            (cars) => cars.model === filter.model
          );
          break;
        case Boolean(filter.color):
          filteredCars = filteredCars.filter(
            (cars) => cars.color === filter.color
          );
          break;
        case Boolean(filter.year):
          filteredCars = filteredCars.filter(
            (cars) => cars.year === filter.year
          );
          break;
        case Boolean(filter.fuel_type):
          filteredCars = filteredCars.filter(
            (cars) => cars.fuel_type === filter.fuel_type
          );
          break;
        default:
          break;
      }
      return filteredCars;
    });
  };

  const createCar = async (data: ICars) => {
    const token = localStorage.getItem("@TOKEN");
    try {
      const response = await api.post(`/cars`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setCars((prevCars) => [...prevCars, response.data]);
    } catch (error) {
      console.log(error);
    }
  };

  const listAllCars = async () => {
    try {
      const response = await api.get("/cars");
      setCars(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const listMyCars = async (id: number | null) => {
    const token = localStorage.getItem("@TOKEN");
    try {
      const response = await api.get(`/cars/user/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setCars(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const updateCar = async (id: number | null, data: IUpdateCar) => {
    const token = localStorage.getItem("@TOKEN");
    try {
      
      const response = await api.patch(`/cars/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const newCars = cars.map((car) => {
        if (car.id === response.data.id) {
          return response.data;
        } else {
          return car;
        }
      });
  
      setCars(newCars);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteCar = async (id: number | null) => {
    const token = localStorage.getItem("@TOKEN");
    try {
      const response = await api.delete(`/cars/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const removeCar = cars.filter((car)=> response.data.id != car.id)
      setCars(removeCar);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CarContext.Provider
      value={{
        cars,
        setCars,
        filters,
        setFilters,
        filterValues,
        setFilterValues,
        ApplyFilterCar,
        createCar,
        updateCar,
        listMyCars,
        listAllCars,
        deleteCar,
        
      }}
    >
      {children}
    </CarContext.Provider>
  );
};

export default CarProvider;
export { CarContext, CarProvider };

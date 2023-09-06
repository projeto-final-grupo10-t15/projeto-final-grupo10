import { createContext, useEffect, useState } from "react";
import { ICars, iChildren } from "./interfaces";
import { api } from "../../services/api";

type CarContextProps = {
  cars: ICars[] | [];
  setCars: React.Dispatch<React.SetStateAction<ICars[] | []>>;
  filters: ICars[] | [];
  setFilters: React.Dispatch<React.SetStateAction<ICars[] | []>>;
  ApplyFilter: () => void;
  createCar: (data: ICars) => void;
  updateCar: (id: number | null, data: ICars) => void;
  listMyCars: (id: number | null) => void;
  listAllCars: () => void;
};

const CarContext = createContext<CarContextProps>({} as CarContextProps);

const CarProvider = ({ children }: iChildren) => {
  const [cars, setCars] = useState<ICars[] | []>([]);
  const [filters, setFilters] = useState<ICars[] | null>([]);

  const ApplyFilter = () => {
    let filteredCars = cars;

    filters?.map((filter) => {
      if (filter.brand) {
        filteredCars = filteredCars.filter((car) => car.brand === filter.brand);
      }
      if (filter.model) {
        filteredCars = filteredCars.filter((car) => car.model === filter.model);
      }
      if (filter.color) {
        filteredCars = filteredCars.filter((car) => car.color === filter.color);
      }
      if (filter.year) {
        filteredCars = filteredCars.filter((car) => car.year === filter.year);
      }
      if (filter.fuel_type) {
        filteredCars = filteredCars.filter(
          (car) => car.fuel_type === filter.fuel_type
        );
      }
      return filteredCars;
    });
  };

  useEffect(() => {
    const Cars = async () => {
      try {
        const response = await api.get("/cars");
        setCars(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    Cars();
  }, []);

  const createCar = async (data: ICars) => {
    const token = localStorage.getItem("@TOKEN");
    try {
      const response = await api.post(`/cars`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setCars(response.data);
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

  const updateCar = async (id: number | null, data: ICars) => {
    const token = localStorage.getItem("@TOKEN");
    try {
      const response = await api.patch(`/cars/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const newAd = cars.map((car) => {
        if (car.id === id) {
          return response.data;
        } else {
          return car;
        }
      });
      setCars(newAd);
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
        ApplyFilter,
        createCar,
        updateCar,
        listMyCars,
        listAllCars,
      }}
    >
      {children}
    </CarContext.Provider>
  );
};

export default CarProvider;
export { CarContext, CarProvider };

import { createContext, useEffect, useState } from "react";
import { ICars, iChildren } from "./interfaces";
import { api } from "../../services/api";

type CarContextProps = {
  car: ICars[] | [];
  setCar: React.Dispatch<React.SetStateAction<ICars[] | []>>;
  createCar: (id: number | null, data: ICars) => void;
  updateCar: (id: number | null, data: ICars) => void;
  listMyCars: (id: number | null) => void;
  listAllCars: () => void;
};

const CarContext = createContext<CarContextProps>({} as CarContextProps);

const CarProvider = ({ children }: iChildren) => {
  const [car , setCar] = useState<ICars[] | []>([]);

  useEffect(() => {
    const Cars = async () => {
      try {
        const response = await api.get("/cars");
        setCar(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    Cars();
  }, []);

  const createCar = async (id: number | null, data: ICars) => {
    const token = localStorage.getItem("@TOKEN");
    try {
      const response = await api.post(`/cars/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setCar(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const listAllCars = async () => {
    try {
      const response = await api.get("/ads")
      setCar(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  const listMyCars = async (id: number | null) => {
    const token = localStorage.getItem("@TOKEN")
    try {
      const response = await api.get(`/cars/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      setCar(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  const updateCar = async (id: number | null, data: ICars) => {
    const token = localStorage.getItem("@TOKEN");
    try {
      const response = await api.patch(`/cars/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const newAd = car.map((ca) => {
        if (ca.id === id) {
          return response.data;
        } else {
          return ca;
        }
      });
      setCar(newAd);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <CarContext.Provider value={{ car, setCar, createCar, updateCar, listMyCars, listAllCars }}>
      {children}
    </CarContext.Provider>
  );
};

export default CarProvider;
export { CarContext, CarProvider };

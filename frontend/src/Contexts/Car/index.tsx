import { createContext, useEffect, useState } from "react";
import { ICars, iChildren } from "./interfaces";
import { api } from "../../services/api";
import { IUpdateCar } from "../../Components/UpdateCarForm/interfaces";

type CarContextProps = {
  car: ICars[] | [];
  setCar: React.Dispatch<React.SetStateAction<ICars[] | []>>;
  createCar: ( data: ICars) => void;
  updateCar: (id: number | null, data: IUpdateCar) => void;
  listMyCars: (id: number | null) => void;
  listAllCars: () => void;
  modalIsOpen: boolean
  setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>
};

const CarContext = createContext<CarContextProps>({} as CarContextProps);

const CarProvider = ({ children }: iChildren) => {
  const [car , setCar] = useState<ICars[] | []>([]);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false)
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

  const createCar = async ( data: ICars): Promise<void> => {
    const token = localStorage.getItem("@TOKEN");
    try {
      const response = await api.post(`/cars`, data, {
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
      const response = await api.get("/cars")
      setCar(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  const listMyCars = async (id: number | null) => {
    const token = localStorage.getItem("@TOKEN")
    try {
      const response = await api.get(`/cars/user/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      setCar(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  const updateCar = async (id: number | null, data: IUpdateCar) => {
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
    <CarContext.Provider value={{ 
      car, 
      setCar, 
      createCar, 
      updateCar, 
      listMyCars, 
      listAllCars,
      modalIsOpen , 
      setModalIsOpen 
    }}>
      {children}
    </CarContext.Provider>
  );
};

export default CarProvider;
export { CarContext, CarProvider };

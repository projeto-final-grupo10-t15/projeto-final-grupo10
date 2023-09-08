import { useContext, useEffect, useState } from "react";
import { StyledDivNameProfile, StyledIconUser } from "../../pages/Home/style";
import {
  StyledCardProduct,
  StyledDivChildInfosCar,
  StyledDivInfosCars,
  StyledListCars,
  StyledSectionCars,
} from "./style";
import { UserContext } from "../../Contexts/User";
import { ButtonOuline } from "../Button";
import { DivButtonsAdm } from "../Button/styles";
import { useLocation } from "react-router-dom";
import { CarContext } from "../../Contexts/Car";

export const Card = () => {
  const { cars } = useContext(CarContext);
  const { user } = useContext(UserContext);
  const location = useLocation();
  const [uniqueData, setUniqueData] = useState(new Set());

  useEffect(() => {
    if (Array.isArray(cars) && cars.length > 0) {
      const newUniqueData = new Set([...uniqueData]);

      cars.map((car) => {
        newUniqueData.add(car.color);
      });
      setUniqueData(newUniqueData);
    }
  }, [cars, uniqueData]);

  const HiddenbuttonsAdm = () => {
    if (location.pathname === "/adm") return (location.pathname = "/adm");
  };

  if (Array.isArray(cars) && cars.length > 0) {
    const carsUpperCase = cars.map((car) => ({
      ...car,
      brand: car.brand.charAt(0).toUpperCase() + car.brand.slice(1),
      model: car.model.charAt(0).toUpperCase() + car.model.slice(1),
      description:
        car.description.charAt(0).toUpperCase() + car.description.slice(1),
      mileage: car.mileage,
      year: car.year,
      fuel_type: car.fuel_type.charAt(0).toUpperCase() + car.model.slice(1),
    }));

    return (
      <StyledSectionCars>
        <StyledListCars>
          {carsUpperCase.map((car) => (
            <StyledCardProduct key={car.id}>
              <>
                <img src="src/assets/carsTest.png" alt="photoCar" />
                <h3>
                  {car.brand} - <span>{car.model}</span>
                </h3>
                <p>{car.description}</p>
              </>
              <StyledDivNameProfile>
                <span>{user?.name.charAt(0)}</span>
                <h4>{user?.name}</h4>
              </StyledDivNameProfile>
              <StyledDivInfosCars>
                <StyledDivChildInfosCar>
                  <StyledIconUser>{car.mileage} km</StyledIconUser>
                  <StyledIconUser>{car.year}</StyledIconUser>
                </StyledDivChildInfosCar>
                <p>R$ {car.price}</p>
              </StyledDivInfosCars>
              {HiddenbuttonsAdm() && (
                <DivButtonsAdm>
                  <ButtonOuline text="Editar" size="small"></ButtonOuline>
                  <ButtonOuline
                    text="Ver detalhes"
                    size="medium"
                  ></ButtonOuline>
                </DivButtonsAdm>
              )}
            </StyledCardProduct>
          ))}
        </StyledListCars>
      </StyledSectionCars>
    );
  }
};

export default Card;

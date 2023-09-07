import { useContext } from "react";
import { StyledDivNameProfile, StyledIconUser } from "../../pages/Home/style";
import {
  StyledCardProduct,
  StyledDivChildInfosCar,
  StyledDivInfosCars,
  StyledListCars,
  StyledSectionCars,
} from "./style";
import { CarContext } from "../../Contexts/Car";
import { UserContext } from "../../Contexts/User";
import { ButtonOuline } from "../Button";
import { DivButtonsAdm } from "../Button/styles";
import { useLocation } from "react-router-dom";

export const Card = () => {
  const { cars } = useContext(CarContext);
  const { users } = useContext(UserContext);
  const location = useLocation();

  const HiddenbuttonsAdm = () => {
    if (location.pathname === "/adm") return (location.pathname = "/adm");
  };

  return (
    <StyledSectionCars>
      <StyledListCars>
        {cars.map((car) => (
          <StyledCardProduct key={car.id}>
            <>
              {/* <img src={car.first_image} alt="photoCar" /> */}
              <img src={"src/assets/carsTest.png"} alt="photoCar" />
              <h3>
                {car.brand} - <span>{car.model}</span>
              </h3>
              <p>{car.description}</p>
            </>
            <StyledDivNameProfile>
              <span>{users?.name}</span>
              <h4>{users?.name}</h4>
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
                <ButtonOuline text="Ver detalhes" size="medium"></ButtonOuline>
              </DivButtonsAdm>
            )}
          </StyledCardProduct>
        ))}
      </StyledListCars>
    </StyledSectionCars>
  );
};

export default Card;

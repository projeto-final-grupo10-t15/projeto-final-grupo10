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

export const Card = () => {
  const { cars } = useContext(CarContext);
  const { user } = useContext(UserContext);

  return (
    <StyledSectionCars>
      <StyledListCars>
        {cars.map((car) => (
          <StyledCardProduct>
            <>
              <img src={car.first_image} alt="photoCar" />
              <button>{car.brand}</button>
              <h3>
                {car.brand} - <span>{car.model}</span>
              </h3>
              <p>{car.description}</p>
            </>
            <StyledDivNameProfile>
              <span>{user?.name.substring(0, 1)}</span>
              <h4>{user?.name}</h4>
            </StyledDivNameProfile>
            <StyledDivInfosCars>
              <StyledDivChildInfosCar>
                <StyledIconUser>{car.mileage} km</StyledIconUser>
                <StyledIconUser>{car.year}</StyledIconUser>
              </StyledDivChildInfosCar>
              <p>{car.price}</p>
            </StyledDivInfosCars>
          </StyledCardProduct>
        ))}
      </StyledListCars>
    </StyledSectionCars>
  );
};

export default Card;

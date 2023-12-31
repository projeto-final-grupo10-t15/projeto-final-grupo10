import { useContext, useState } from "react";
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
import { UpdateModal } from "../UpdateModal";
import { UpdateCarForm } from "../UpdateCarForm";

export const Card = () => {
  const { cars, applyUpperCase } = useContext(CarContext);
  const { user } = useContext(UserContext);
  const location = useLocation();
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [selectedCarId, setSelectedCarId] = useState(-1);

  const toggleModal = <T extends number | string = number | string>(
    carId?: T
  ) => {
    setSelectedCarId(carId as number);
    setOpenModal(!openModal);
  };

  const HiddenbuttonsAdm = () => {
    if (location.pathname === "/adm") return (location.pathname = "/adm");
  };

  const upperCaseCars = cars.map((car) => ({
    ...car,
    brand: applyUpperCase(car.brand),
    model: applyUpperCase(car.model),
    description: applyUpperCase(car.description),
  }));

  return (
    <StyledSectionCars>
      <StyledListCars>
        {upperCaseCars.map((car) => (
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
                <ButtonOuline
                  text="Editar"
                  size="small"
                  onClick={() => {
                    if (car.id) {
                      toggleModal(car.id);
                    }
                  }}
                ></ButtonOuline>
                <ButtonOuline
                  text="Ver detalhes"
                  size="medium"
                  onClick={() => {}}
                ></ButtonOuline>
              </DivButtonsAdm>
            )}
          </StyledCardProduct>
        ))}
        {openModal && (
          <UpdateModal toggleModal={toggleModal}>
            <UpdateCarForm id={selectedCarId} />
          </UpdateModal>
        )}
      </StyledListCars>
    </StyledSectionCars>
  );
};

export default Card;

import { useContext } from "react";
import {
  StyledAsideFilter,
  StyledListAside,
  StyledAsideInfosCard,
} from "../../Components/Aside/styled";
import { CarContext } from "../../Contexts/Car";
import { Input } from "../Input";

export const AsideFilter = () => {
  const { cars } = useContext(CarContext);

  return (
    <>
      <StyledAsideFilter>
        <StyledListAside>
          <StyledAsideInfosCard>
            <h2>Marca</h2>
            {cars.map((car) => (
              <button>{car.brand}</button>
            ))}
          </StyledAsideInfosCard>
          <StyledAsideInfosCard>
            <h2>Modelo</h2>
            {cars.map((car) => (
              <button>{car.model}</button>
            ))}
          </StyledAsideInfosCard>
          <StyledAsideInfosCard>
            <h2>Cor</h2>
            {cars.map((car) => (
              <button>{car.color}</button>
            ))}
          </StyledAsideInfosCard>
          <StyledAsideInfosCard>
            <h2>Ano</h2>
            {cars.map((car) => (
              <button>{car.year}</button>
            ))}
          </StyledAsideInfosCard>
          <StyledAsideInfosCard>
            <h2>Combustível</h2>
            {cars.map((car) => (
              <button>{car.fuel_type}</button>
            ))}
          </StyledAsideInfosCard>
        </StyledListAside>
        <div>
          <h2>Km</h2>
          <Input id="id" type="range" min="0" max="10" />
        </div>
        <div>
          <h2>Preço</h2>
          <Input id="id" type="range" min="0" max="10" />
        </div>
      </StyledAsideFilter>
    </>
  );
};

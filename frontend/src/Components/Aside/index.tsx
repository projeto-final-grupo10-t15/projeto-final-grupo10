import { useContext } from "react";
import {
  StyledAsideFilter,
  StyledListAside,
  StyledAsideInfosCard,
} from "../../Components/Aside/styled";
import { Input } from "../Input";
import { CarContext } from "../../Contexts/Car";

export const AsideFilter = () => {
  const { car } = useContext(CarContext);
  return (
    <>
      <StyledAsideFilter>
        <StyledListAside>
          <StyledAsideInfosCard>
            <h2>Marca</h2>
            <ul>
              <>
                {car.map((ca) => {
                  <li>{ca.brand}</li>;
                })}
              </>
            </ul>
          </StyledAsideInfosCard>
          <StyledAsideInfosCard>
            <h2>Modelo</h2>
            <>
              {car.map((ca) => {
                <li>{ca.model}</li>;
              })}
            </>
          </StyledAsideInfosCard>
          <StyledAsideInfosCard>
            <h2>Cor</h2>
            <>
              {car.map((ca) => {
                <li>{ca.color}</li>;
              })}
            </>
          </StyledAsideInfosCard>
          <StyledAsideInfosCard>
            <h2>Ano</h2>
            <>
              {car.map((ca) => {
                <li>{ca.year}</li>;
              })}
            </>
          </StyledAsideInfosCard>
          <StyledAsideInfosCard>
            <h2>Combustível</h2>
            <>
              {car.map((ca) => {
                <li>{ca.fuel_type}</li>;
              })}
            </>
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

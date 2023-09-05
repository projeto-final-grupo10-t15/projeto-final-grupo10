import {
  StyledAsideFilter,
  StyledListAside,
  StyledAsideInfosCard,
} from "../../Components/Aside/styled";
import { Input } from "../Input";

export const AsideFilter = () => {
  return (
    <>
      <StyledAsideFilter>
        <StyledListAside>
          <StyledAsideInfosCard>
            <h2>Marca</h2>
            <p>General Motors</p>
            <p>General Motors</p>
            <p>General Motors</p>
            <p>General Motors</p>
            <p>General Motors</p>
          </StyledAsideInfosCard>
          <StyledAsideInfosCard>
            <h2>Modelo</h2>
            <p>General Motors</p>
            <p>General Motors</p>
            <p>General Motors</p>
            <p>General Motors</p>
            <p>General Motors</p>
          </StyledAsideInfosCard>
          <StyledAsideInfosCard>
            <h2>Cor</h2>
            <p>General Motors</p>
            <p>General Motors</p>
            <p>General Motors</p>
            <p>General Motors</p>
            <p>General Motors</p>
            <p>General Motors</p>
          </StyledAsideInfosCard>
          <StyledAsideInfosCard>
            <h2>Ano</h2>
            <p>General Motors</p>
            <p>General Motors</p>
            <p>General Motors</p>
            <p>General Motors</p>
            <p>General Motors</p>
          </StyledAsideInfosCard>
          <StyledAsideInfosCard>
            <h2>Combustível</h2>
            <p>General Motors</p>
            <p>General Motors</p>
            <p>General Motors</p>
            <p>General Motors</p>
            <p>General Motors</p>
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

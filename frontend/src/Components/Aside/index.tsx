import { useContext, useEffect } from "react";
import {
  StyledAsideFilter,
  StyledListAside,
  StyledAsideInfosCard,
} from "../../Components/Aside/styled";
import { CarContext } from "../../Contexts/Car";
import { InputRange } from "../Input";

export const AsideFilter = () => {
  const {
    cars,
    ApplyFilterCar,
    setFilters,
    filters,
    filterValues,
    setFilterValues,
  } = useContext(CarContext);

  useEffect(() => {
    ApplyFilterCar();
  }, [ApplyFilterCar, filters]);

  useEffect(() => {
    const filtered = cars.filter((car) => {
      if (+car.mileage <= +filterValues) {
        return true;
      }
      return false;
    });
    setFilters(filtered);
  }, [cars, filterValues, setFilters]);

  const handleRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterValues(e.target.value);
  };

  return (
    <>
      <StyledAsideFilter>
        <StyledListAside>
          <StyledAsideInfosCard>
            <h2>Marca</h2>
            {cars.map((car) => (
              <button onChange={ApplyFilterCar}>{car.brand}</button>
            ))}
          </StyledAsideInfosCard>
          <StyledAsideInfosCard>
            <h2>Modelo</h2>
            {cars.map((car) => (
              <button onChange={ApplyFilterCar}>{car.model}</button>
            ))}
          </StyledAsideInfosCard>
          <StyledAsideInfosCard>
            <h2>Cor</h2>
            {cars.map((car) => (
              <button onChange={ApplyFilterCar}>{car.color}</button>
            ))}
          </StyledAsideInfosCard>
          <StyledAsideInfosCard>
            <h2>Ano</h2>
            {cars.map((car) => (
              <button onChange={ApplyFilterCar}>{car.year}</button>
            ))}
          </StyledAsideInfosCard>
          <StyledAsideInfosCard>
            <h2>Combustível</h2>
            {cars.map((car) => (
              <button onChange={ApplyFilterCar}>{car.fuel_type}</button>
            ))}
          </StyledAsideInfosCard>
        </StyledListAside>
        <div>
          <h2>Km</h2>
          <InputRange
            onChange={handleRangeChange}
            id="id"
            type="range"
            min="10"
            max="100"
            value={filterValues}
          />
        </div>
        <div>
          <h2>Preço</h2>
          <InputRange
            className="range"
            id="id"
            type="range"
            min="-1000"
            max="1000"
          />
        </div>
      </StyledAsideFilter>
    </>
  );
};

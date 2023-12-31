import { styled } from "styled-components";

const StyledSectionCars = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  background-color: transparent;
  padding: 40px 20px;
`;

const StyledListCars = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 30.5px;
  flex-wrap: wrap;
`;

const StyledCardProduct = styled.li`
  width: 100%;
  max-width: 280px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 20px;
  background-color: transparent;
  padding: 5px;
  cursor: pointer;

  img {
    width: 100%;
    border-radius: 5px;
  }

  &:hover {
    box-shadow: 0 0 10px 0 var(--brand3);
    border-radius: 5px;
  }
`;

const StyledDivInfosCars = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const StyledDivChildInfosCar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export {
  StyledCardProduct,
  StyledListCars,
  StyledSectionCars,
  StyledDivChildInfosCar,
  StyledDivInfosCars,
};

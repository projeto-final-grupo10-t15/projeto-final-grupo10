import { styled } from "styled-components";

const StyledMainHome = styled.main`
  width: 100%;
  height: 100%;
  max-height: max-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  background-color: var(--whiteFixed);
`;

const StyledPrimarySectionHome = styled.section`
  width: 100%;
  height: 100%;
  max-height: 540px;
`;

const StyledImagePrimaryHome = styled.img`
  src: url(${(props) => props.src});
  max-height: 540px;
  width: 100%;
  height: 100%;
`;

const StyledArticlePrimary = styled.article`
  width: 100%;
  height: 100%;
  max-height: 1280px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 0 30px;
`;

const StyledSectionCars = styled.section`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: var(--whiteFixed);
  padding: 0 0 0 20px;
`;

const StyledListCars = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  gap: 30.5px;
  flex-wrap: wrap;
`;

const StyledCardProduct = styled.li`
  width: 100%;
  max-width: 300px;
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

const StyledDivNameProfile = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;

  span {
    width: 32px;
    height: 32px;
    background-color: var(--brand1);
    border-radius: 50%;
    text-align: center;
    padding: 6px 0 0 0;
    color: var(--whiteFixed);
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

const StyledIconUser = styled.p`
  background-color: var(--brand4);
  color: var(--brand1);
  padding: 4px 8px;
  border-radius: 4px;
  font-weight: 500;
  font-size: 14px;
`;

export {
  StyledMainHome,
  StyledPrimarySectionHome,
  StyledImagePrimaryHome,
  StyledArticlePrimary,
  StyledSectionCars,
  StyledListCars,
  StyledCardProduct,
  StyledDivNameProfile,
  StyledDivInfosCars,
  StyledDivChildInfosCar,
  StyledIconUser,
};

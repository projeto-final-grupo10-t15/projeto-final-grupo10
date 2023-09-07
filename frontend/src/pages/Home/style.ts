import { styled } from "styled-components";

const StyledMainHome = styled.main`
  width: 100%;
  height: 100%;
  max-height: max-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0 30px;
`;

const StyledDivNameProfile = styled.div`
  width: 100%;
  height: 100%;
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
  StyledDivNameProfile,
  StyledIconUser,
};

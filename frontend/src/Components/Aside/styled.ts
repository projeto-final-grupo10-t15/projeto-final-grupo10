import { styled } from "styled-components";

const StyledAsideFilter = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 400px;
  max-width: 100%;
  height: 100%;
  background-color: var(--whiteFixed);
  padding: 60px 10px;

  ul > li > h2 {
    margin-bottom: 15px;
  }

  ul > li > p {
    display: flex;
    flex-direction: column;
    cursor: pointer;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 15px;
  }
`;

const StyledListAside = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 15px;
`;

const StyledAsideInfosCard = styled.li`
  display: flex;
  flex-direction: column;
  margin: 15px 0;

  p {
    color: var(--grey3);
  }

  p:hover {
    color: var(--grey2);
  }
`;

export { StyledAsideFilter, StyledListAside, StyledAsideInfosCard };

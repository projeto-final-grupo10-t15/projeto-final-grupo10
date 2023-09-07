import { styled } from "styled-components";

const StyledMainBack = styled.main`
  background-color: var(--grey8);
  height: 100%;
  width: 100%;
`;

const StyledContainer = styled.div`
  width: 100%;
  flex-grow: 1;
  margin-bottom: 0rem;
`;

const StyledContainerFooter = styled.div`
  background-color: var(--grey8);
  display: flex;
  flex-direction: column;
  width: 100%;
  flex-grow: 1;
  align-items: center;
`;

export { StyledContainer, StyledMainBack, StyledContainerFooter };

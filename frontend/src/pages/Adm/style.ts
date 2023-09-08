import { styled } from "styled-components";

const StyledMainBack = styled.main`
  background-color: var(--grey8);
  width: 100%;
  height: 100%;
  gap: 50px;
`;

const StyledContainerFooter = styled.div`
  background-color: var(--grey8);
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  flex-grow: 1;
  align-items: center;
`;

export { StyledMainBack, StyledContainerFooter };

import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const StyledLinkLogin = styled(Link)`
  display: flex;
  height: 3rem;
  padding: 0.75rem 1.75rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  color: var(--grey2);
  background: var(--grey10);
  margin: auto;
  transform: scale(0.9);

  &:hover {
    transform: scale(1);
    font-size: 16px;
    color: var(--brand1);
  }
`;

export const StyledLinkRegister = styled(Link)`
  display: flex;
  height: 3rem;
  max-height: 75%;
  padding: 0.75rem 1.75rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border-radius: 0.25rem;
  border: 1.5px solid var(--grey4);
  color: var(--grey0);
  background: var(--grey10);
  margin: auto;
  width: 80%;

  &:hover {
    background-color: var(--brand2);
    color: var(--whiteFixed);
    border-radius: 10px;
    border: 1.8px solid var(--brand1);
  }

  @media (min-width: 768px) {
    flex-direction: row;
    display: flex;
    align-items: center;
    gap: 2.75rem;
    background: var(--grey10);
    height: 4.2rem;
    border-left: 0.1rem solid var(--grey6);
    width: fit-content;
    .registerButton {
      width: fit-content;
    }
  }
`;

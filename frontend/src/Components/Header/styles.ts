import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  height: 70px;
  background-color: #fff;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.25);
  position: relative;
  .menuToggle {
    display: block;

    img {
      cursor: pointer;
    }
  }

  .buttonsContainer {
    display: none;
    position: absolute;
    top: 100%;
    right: 20px;
    flex-direction: column;
    gap: 0.5rem;
    background-color: #fff;
    padding: 0.5rem 0;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.25);
    border-radius: 4px;

    &.active {
      display: flex;
    }
  }

  @media (min-width: 768px) {
    .menuToggle {
      display: none;
    }

    .buttonsContainer {
      display: flex;
      position: static;
      flex-direction: row;
      gap: 1rem;
      background-color: transparent;
      padding: 0;
      box-shadow: none;
    }
    .registerButton {
      display: flex;
      height: 3rem;
      padding: 0.75rem 1.75rem;
      justify-content: center;
      align-items: center;
      gap: 0.625rem;
      border-radius: 0.25rem;
      border: 1.5px solid var(--grey4);
      color: var(--grey0);
      background: var(--grey10);
    }
  }
`;

export default { StyledHeader };

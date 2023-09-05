import { styled } from "styled-components";

export const StyledRegisterForm = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  background-color: var(--grey8);
  .register__container {
    display: flex;
    padding: 2rem 1rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 1rem 0;
    gap: 1.5rem;
    border-radius: 4px;
    background-color: var(--grey10);
    width: 100%;
    height: 50%;
    max-width: 411px;
  }
  h2 {
    font-family: "Lexend", sans-serif;
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 1.875rem;
  }
  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding: 1rem;
  }

  p {
    font-family: "Inter", sans-serif;
    color: var(--grey2);
    font-weight: 500;
    font-size: 0.875rem;
  }

  .submitBtn {
    font-size: 1rem;
    font-family: "Inter", sans-serif;
    width: 100%;
    height: 48px;
    border-radius: 4px;
    border: none;
    background-color: var(--brand1);
    color: var(--whiteFixed);
  }
  .submitBtn:hover {
    background-color: var(--brand2);
  }

  .choice__container {
    display: flex;
    gap: 10px;
    font-family: "Inter", sans-serif;
    font-weight: 600;
    width: 100%;
  }
  .choice__container input[type="radio"] {
    display: none;
  }
  .choice {
    display: inline-block;
    padding: 10px 14px;
    border: 2px solid var(--grey4);

    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s, border-color 0.3s;
    background-color: transparent;
    color: inherit;
  }
  .choice:hover {
    background-color: var(--brand1);
    border-color: var(--brand1);
    color: var(--whiteFixed);
  }

  .choice input[type="radio"]:checked + .choice {
    background-color: var(--brand1);
    border-color: var(--brand1);
    color: var(--whiteFixed);
  }
`;

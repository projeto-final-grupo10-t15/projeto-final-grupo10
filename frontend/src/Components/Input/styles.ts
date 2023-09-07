import { styled } from "styled-components";

export const StyledInput = styled.fieldset`
  gap: 0.5rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  border: none;

  label {
    font-size: 0.875rem;
    font-family: "Inter", sans-serif;
    font-weight: 500;
    line-height: 16.94px;
    color: var(--grey1);
  }
  input {
    border-radius: 4px;
    border: 2px solid var(--grey7);
    width: 100%;
    height: 48px;
    padding: 0.3rem;
    transform: scale(1);
    cursor: pointer;
  }

  :focus {
    box-shadow: 0 0 4px 1px var(--brand2);
    outline: 0;
  }

  input:hover {
    transform: scale(1.04);
  }

  .range {
    :focus {
      box-shadow: none;
      outline: 0;
    }
  }
`;

export const StyledInputRange = styled.fieldset`
  gap: 0.5rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  border: none;

  label {
    font-size: 0.875rem;
    font-family: "Inter", sans-serif;
    font-weight: 500;
    line-height: 16.94px;
    color: var(--grey1);
  }
  input {
    border-radius: 4px;
    border: 2px solid var(--grey7);
    width: 100%;
    /* height: 48px; */
    padding: 0.3rem;
    transform: scale(1);
    cursor: pointer;
  }

  :focus {
    outline: 0;
  }

  .range {
    :focus {
      box-shadow: none;
      outline: 0;
    }
  }
`;

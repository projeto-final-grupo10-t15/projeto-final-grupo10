import { styled } from "styled-components";

const buttonStyles = `
    border-radius: 4px;
    border: 2px solid var(--grey1);
    font-weight: 600;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    background-color: transparent;

    &:hover {
        box-shadow: 0 0 2px 1px var(--grey2);
        
    }
`;

export const SmallOutlineButton = styled.button`
  ${buttonStyles}
  width: 100%;
  max-width: max-content;
  padding: 12px 20px;
  font-size: 14;
`;

export const MediumOutlineButton = styled.button`
  ${buttonStyles}
  width: 100%;
  max-width: max-content;
  padding: 12px 20px;
  font-size: 14;
`;

export const DivButtonsAdm = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
`;

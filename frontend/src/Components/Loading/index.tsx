import styled from "styled-components";
import { keyframes } from "styled-components";

const loadingAnimation = keyframes`
    0%{transform:translateX(-150px) rotateY(90deg)}
    100%{transform:translateX() rotateY()}
`;
export const StyledLoading = styled.div`
  width: 100%;
  height: 100vh;
  background-color: var(--brand2);
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    color: var(--grey7);
    font-size: 35px;
    animation: ${loadingAnimation} 1.5s linear both infinite;
  }
`;

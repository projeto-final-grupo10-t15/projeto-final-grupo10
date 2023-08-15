import styled from "styled-components";

export const DropdownContainer = styled.div<{ show: boolean }>`
  display: ${(props) => (props.show ? "block" : "none")};
  position: absolute;
  top: 103%;
  right: 0;
  width: 100vw;
  background-color: #fff;
  height: 20vh;
`;

export default { DropdownContainer };

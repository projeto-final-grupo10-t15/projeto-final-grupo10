import Buttons from "../Buttons";
import { DropdownContainer } from "./style";

interface iDrop {
  show: boolean;
}

const Drop = ({ show }: iDrop) => {
  return (
    <DropdownContainer show={show}>
      <Buttons />
    </DropdownContainer>
  );
};

export default Drop;

import { MediumOutlineButton, SmallOutlineButton } from "./styles";
import { IButton } from "./types";

export const ButtonOuline = ({ text, size }: IButton) => {
  let StyledButton;

  switch (size) {
    case "small":
      StyledButton = SmallOutlineButton;
      break;
    case "medium":
      StyledButton = MediumOutlineButton;
      break;
    default:
      StyledButton = MediumOutlineButton;
  }
  return <StyledButton>{text}</StyledButton>;
};

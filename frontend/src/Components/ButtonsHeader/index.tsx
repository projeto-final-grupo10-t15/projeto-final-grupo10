import { StyledLinkLogin, StyledLinkRegister } from "../Link/styles";
import { StyledDivButton } from "./styles";

const Buttons = () => {
  return (
    <StyledDivButton>
      <StyledLinkLogin to="/login" className="loginButton">
        Fazer login
      </StyledLinkLogin>
      <StyledLinkRegister to="/register">Cadastrar</StyledLinkRegister>
    </StyledDivButton>
  );
};

export default Buttons;

import { StyledButton } from "./styles";
import { Link } from "react-router-dom";

const Buttons = () => {
  return (
    <StyledButton>
      <Link to="/login">
        <button className="loginButton">Fazer login</button>
      </Link>
      <Link to="/register">
        <button className="registerButton">Cadastrar</button>
      </Link>
    </StyledButton>
  );
};

export default Buttons;

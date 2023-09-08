import { useLocation } from "react-router-dom";
import { StyledLinkLogin, StyledLinkRegister } from "../Link/styles";
import { StyledDivButton, StyledInfoUserHeader } from "./styles";
import { useContext } from "react";
import { UserContext } from "../../Contexts/User";

const Buttons = () => {
  const { user } = useContext(UserContext);
  const location = useLocation();
  const HiddenbuttonsAdm = () => {
    if (
      location.pathname === "/" ||
      location.pathname === "/login" ||
      location.pathname === "/register"
    )
      return (
        location.pathname === "/login" ||
        location.pathname === "/register" ||
        location.pathname === "/"
      );
  };
  return (
    <>
      {HiddenbuttonsAdm() ? (
        <>
          <StyledDivButton>
            <StyledLinkLogin to="/login" className="loginButton">
              Fazer login
            </StyledLinkLogin>
            <StyledLinkRegister to="/register">Cadastrar</StyledLinkRegister>
          </StyledDivButton>
        </>
      ) : (
        <StyledDivButton>
          <StyledInfoUserHeader to={"/adm"}>
            <span>{user?.name.charAt(0)}</span>
            <h4>{user?.name}</h4>
          </StyledInfoUserHeader>
        </StyledDivButton>
      )}
    </>
  );
};

export default Buttons;

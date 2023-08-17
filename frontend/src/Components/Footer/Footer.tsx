import LogoFooter from "../../Assets/Logo Footer.svg";
import todosDireitos from "../../Assets/Todos os direitos reservados.svg";
import Top from "../../Assets/Top.svg";
import { StyledFooter } from "./styles";

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <StyledFooter>
      <img src={LogoFooter} alt="Logo Footer" className="footer__logo" />
      <img src={todosDireitos} alt="TodosDireitosReservados" />
      <img
        src={Top}
        alt="Top"
        className="footer__top"
        onClick={handleScrollToTop}
      />
    </StyledFooter>
  );
};

export default Footer;

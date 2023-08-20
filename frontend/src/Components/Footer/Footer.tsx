import LogoFooter from "../../Assets/Logo Footer.svg";
import todosDireitos from "../../Assets/Todos os direitos reservados.svg";
import Top from "../../Assets/Top.svg";
import { StyledFooter, StyledFooterPages } from "./styles";

export const Footer = () => {
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

export const FooterPages = () => {
  return (
    <StyledFooterPages>
      <img
        src="src/assets/angulo-duplo-pequeno-esquerdo.png"
        alt="arrowPrevious"
      />
      <a href="">Anterior</a>
      <div>
        <span>1</span>
        <span>de</span>
        <span>2</span>
      </div>
      <a href="">Seguinte</a>
      <img src="src/assets/angulo-duplo-pequeno-direito.png" alt="arrowNext" />
    </StyledFooterPages>
  );
};

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
      <img src="src/assets/seta-para-a-esquerda.png" alt="arrowNext" />
      <a href="">Anterior </a>
      <div>
        <a>1</a>
        <a>de</a>
        <a>2</a>
      </div>
      <a href="">Seguinte </a>
      <img src="src/assets/seta-para-a-direita.png" alt="arrowNext" />
    </StyledFooterPages>
  );
};
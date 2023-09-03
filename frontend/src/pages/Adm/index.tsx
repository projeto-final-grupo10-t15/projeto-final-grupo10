import CardCarsAdm from "../../Components/CardCarsAdm";
import CardUserInfo from "../../Components/CardUserInfo";
import { Footer, FooterPages } from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import {
  StyledContainer,
  StyledContainerFooter,
  StyledMainBack,
} from "./style";

const Anunciante = () => {
  return (
    <>
      <StyledMainBack>
        <Header />
        <CardUserInfo button={"Anunciante"} />
        <StyledContainer>
          <CardCarsAdm />
        </StyledContainer>
        <StyledContainerFooter>
          <FooterPages />
          <Footer />
        </StyledContainerFooter>
      </StyledMainBack>
    </>
  );
};

export default Anunciante;

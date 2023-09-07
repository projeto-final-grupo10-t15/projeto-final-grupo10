import Card from "../../Components/Card";
import CardUserInfo from "../../Components/CardUserInfo";
import { CardUserInfoContainer } from "../../Components/CardUserInfo/style";
import { Footer, FooterPages } from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import { ArticleUser } from "../User/style";
import { StyledContainerFooter, StyledMainBack } from "./style";

const Anunciante = () => {
  return (
    <>
      <Header />
      <StyledMainBack>
        <CardUserInfoContainer>
          <CardUserInfo />
        </CardUserInfoContainer>
        <ArticleUser>
          <Card />
        </ArticleUser>
        <StyledContainerFooter>
          <FooterPages />
          <Footer />
        </StyledContainerFooter>
      </StyledMainBack>
    </>
  );
};

export default Anunciante;

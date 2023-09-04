import Card from "../../Components/Card";
import CardUserInfo from "../../Components/CardUserInfo";
import { CardUserInfoContainer } from "../../Components/CardUserInfo/style";
import { Footer } from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import { ArticleUser, MainContainer } from "./style";

export const UserPage = () => {
  return (
    <>
      <Header />
      <MainContainer>
        <CardUserInfoContainer>
          <CardUserInfo />
        </CardUserInfoContainer>
        <ArticleUser>
          <h3>Anúncios</h3>
          <Card />
        </ArticleUser>
      </MainContainer>
      <Footer />
    </>
  );
};

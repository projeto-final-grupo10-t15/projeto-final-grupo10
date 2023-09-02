import Card from "../../Components/Card";
import Header from "../../Components/Header/Header";
import {
  ArticleUser,
  DivBackGroundColorPrimary,
  MainContainer,
  UserProfile,
} from "./style";

export const UserPage = () => {
  return (
    <>
      <Header />
      <MainContainer>
        <DivBackGroundColorPrimary />
        <UserProfile></UserProfile>
        <ArticleUser>
          <h3>Anúncios</h3>
          <Card />
        </ArticleUser>
      </MainContainer>
    </>
  );
};

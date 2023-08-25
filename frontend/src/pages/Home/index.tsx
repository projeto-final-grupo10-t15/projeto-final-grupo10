import { AsideFilter } from "../../Components/Aside";
import Card from "../../Components/Card";
import { FooterPages } from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import { ArticlePrimary, MainHome, PrimarySectionHome } from "./style";

export const Home = () => {
  return (
    <>
      <Header />
      <MainHome>
        <PrimarySectionHome>
          <img src="src/assets/Content.png" alt="" />
        </PrimarySectionHome>
        <ArticlePrimary>
          <AsideFilter />
          <Card />
        </ArticlePrimary>
      </MainHome>
      <FooterPages />
    </>
  );
};

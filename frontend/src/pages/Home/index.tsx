import { AsideFilter } from "../../Components/Aside";
import Card from "../../Components/Card";
import { FooterPages } from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import {
  StyledMainHome,
  StyledPrimarySectionHome,
  StyledArticlePrimary,
} from "./style";

export const Home = () => {
  return (
    <>
      <Header />
      <StyledMainHome>
        <StyledPrimarySectionHome>
          <img src="src/assets/Car_Primary.png" alt="" />
        </StyledPrimarySectionHome>
        <StyledArticlePrimary>
          <AsideFilter />
          <Card />
        </StyledArticlePrimary>
      </StyledMainHome>
      <FooterPages />
    </>
  );
};

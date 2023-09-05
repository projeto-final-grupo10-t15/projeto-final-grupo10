import { AsideFilter } from "../../Components/Aside";
import Card from "../../Components/Card";
import { FooterPages } from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import {
  StyledMainHome,
  StyledPrimarySectionHome,
  StyledArticlePrimary,
  StyledImagePrimaryHome,
} from "./style";


export const HomePage = () => {
  
  return (
    <>
      <Header />
      <StyledMainHome>
        <StyledPrimarySectionHome>
          <StyledImagePrimaryHome src="src/assets/Car_Primary.png" />
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

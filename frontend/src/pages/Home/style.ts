import { styled } from "styled-components";

const MainHome = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--whiteFixed);
  gap: 30px;
`;

const PrimarySectionHome = styled.section`
  width: 100%;
  max-height: 540px;
  height: 100%;
  

  img {
    max-height: 540px;
    width: 100%;
    height: 100%;
  }
`;

const ArticlePrimary = styled.article`
  width: 100%;
  height: 100%;
  height: 1280px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 0 30px;
`;

const AsideFilterStyled = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 400px;
  max-width: 100%;
  height: 100%;
  background-color: var(--whiteFixed);
  padding: 25px 10px;

  ul {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 15px;
  }

  ul > li {
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-top: 30px;
  }

  ul > li > h2 {
    margin-bottom: 15px;
  }

  ul > li > p {
    display: flex;
    flex-direction: column;
    cursor: pointer;
  }
`;

const SectionCars = styled.section`
  width: 100%;
  height: 100%;
  background-color: var(--grey8);;
  padding: 0 0 0 20px;

  ul {
    display: flex;
    flex-direction: row;
    gap: 30.5px;
    flex-wrap: wrap;
  }

  ul > li {
    width: 100%;
    max-width: 300px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-bottom: 20px;
    background-color: transparent;
    padding: 5px;
    cursor: pointer;

    &:hover {
      box-shadow: 0 0 10px 2px var(--brand4);
      border-radius: 5px;
    }
  }

  ul > li > img {
    width: 100%;
  }

  ul > li > .vendedor {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    gap: 10px;
  }

  ul > li > .vendedor > span {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: var(--brand1);
    color: var(--whiteFixed);
  }

  ul > li > div {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  ul > li > div > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 15px;

    p {
      padding: 5px;
      border-radius: 5px;
      background-color: var(--brand4);
      color: var(--brand1);
      font-size: 14px;
      font-weight: 500;
    }
  }

  ul > li > div > div > p {
    align-items: center;
  }
`;

export {
  MainHome,
  PrimarySectionHome,
  ArticlePrimary,
  AsideFilterStyled,
  SectionCars,
};

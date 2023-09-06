import { styled } from "styled-components";

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  background: var(--grey0);
  padding: 1rem 0;
  width: 100%;
  height: fit-content;

  .footer__logo {
    width: 100px;
    height: auto;
  }

  img:not(.footer__logo):not(.footer__top) {
    width: 180px;
    height: auto;
  }

  .footer__top {
    width: 35px;
    height: auto;
    cursor: pointer;
  }

  @media (min-width: 768px) {
    flex-direction: row; //
    gap: 1.5rem;
    justify-content: space-around;

    .footer__logo {
      width: 154px;
      height: 28px;
    }

    img:not(.footer__logo):not(.footer__top) {
      width: 263px;
      height: 12px;
    }

    .footer__top {
      width: 53px;
      height: 50px;
    }
  }
`;

const StyledFooterPages = styled.footer`
  width: 100%;
  height: 50px;
  max-height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 15px;

  img {
    width: 30px;
    cursor: pointer;
  }

  a {
    color: var(--brand2);
    font-size: 18px;
    font-weight: 600;
  }

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;
  }

  span {
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    text-decoration: none;
    color: var(--grey4);
  }

  div > a {
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    text-decoration: none;
    color: var(--grey4);
  }

  div > a:hover {
    color: var(--grey2);
  }
`;

export { StyledFooter, StyledFooterPages };

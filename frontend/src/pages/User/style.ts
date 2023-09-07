import { styled } from "styled-components";

export const MainContainer = styled.main`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 0 0 100px 0;
  display: flex;
  flex-direction: column;
  background-color: var(--grey8);
  position: relative;
`;

export const DivBackGroundColorPrimary = styled.div`
  width: 100%;
  height: 280px;
  background-color: var(--brand1);
`;

export const UserProfile = styled.div`
  width: 80%;
  margin: 0 auto;
  height: 325px;
  border-radius: 4px;
  background-color: var(--whiteFixed);
  position: absolute;
  top: 50px;
  left: 130px;
`;

export const ArticleUser = styled.article`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 150px 45px 0 45px;
  gap: 30px;
`;

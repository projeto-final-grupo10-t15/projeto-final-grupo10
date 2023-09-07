import { styled } from "styled-components";

export const CardUserInfoContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;

  background: var(--brand1);

  height: 10rem;
  font-family: Inter;

  .perfil__box {
    background-color: var(--grey10);
    border-radius: 0.25rem;
    width: 86%;
    height: 35rem;
    margin: 1.5rem;
    z-index: 0;

    .perfil__box--img {
      margin: 1rem;
      width: fit-content;
      height: fit-content;
    }
    .perfil__name {
      h3 {
        font-weight: var(--font-heading6-600);
      }
      p {
        color: var(--brand1);
        font-size: 0.875rem;
        font-style: normal;
        font-weight: 500;
        line-height: 1.5rem;
        padding: 0.25rem 0.5rem;
        border-radius: 0.25rem;
        background: var(--brand4);
      }
      display: flex;
      flex-direction: row;
      justify-content: space-around;
    }
    .perfil__box--info {
      padding: 1rem;
      color: var(--gey2);
      font-family: Inter;
      font-size: 1rem;
      font-style: normal;
      font-weight: 400;
      line-height: 1.75rem;
    }
    .containerBtn {
      padding: 1rem;
    }
    button {
      margin-top: 4%;
      height: 3rem;
      padding: 0.75rem 1.75rem;
      margin-left: 1rem;
      border: 1.5px solid;
      border-color: var(--brand1);
      border-radius: 0.25rem;
      border: 1.5px solid var(--brand-brand-1, #4529e6);
      background: none;
      cursor: pointer;
      color: var(--brand1);
    }

    button:hover {
      border: 2px solid var(--brand-brand-1, #4529e6);
      font-weight: 500;
    }
  }

  @media (min-width: 768px) {
    .perfil__box {
      width: 77%;
      margin-left: 12%;
      .perfil__name {
        margin: 1rem;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        gap: 1rem;
      }
    }
  }
`;

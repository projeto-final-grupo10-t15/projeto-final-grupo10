import { styled } from "styled-components";

const SectionCarsAdm = styled.section`
  width: 100%;
  padding: 0 0 2rem 20px; // Adicione um padding inferior para dar espaço
  background-color: var(--grey8);
  margin-top: 22rem;

  .actived {
    position: absolute;
    z-index: 1;
    top: 1.1rem;
    left: 1rem;
    width: fit-content;
    height: fit-content;
    padding: 0rem 0.5rem;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;
    background: var(--brand1);
    color: var(--whiteFixed);
    font-family: Inter;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.5rem;
  }

  ul {
    display: flex;
    flex-direction: row;
    gap: 30.5px;
    flex-wrap: nowrap;

    overflow-x: auto;
    white-space: nowrap;
  }

  ul > li {
    position: relative;
    width: 100%;
    max-width: 300px;
    display: inline-block;
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
  ul > li > h3 {
    font-weight: var(--font-heading7-600);
    font-family: lexend;
  }
  ul > li > p {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width: 100%;
    color: var(--grey2);

    font-family: Inter;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5rem;
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
  .boxButtons {
    gap: 1rem;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  }
  button {
    width: fit-content;
    height: fit-content;
    border-radius: 0.25rem;
    border: 1.5px solid var(--grey1);
    padding: 0.75rem 1.25rem;
    color: var(--grey1);
    font-family: Inter;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 600;
    line-height: 0rem;
    background: none;
  }
  @media (min-width: 768px) {
    ul {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 1.25rem;
      flex-wrap: wrap;
    }

    ul > li {
      display: flex;
      flex-direction: column;
    }
  }
`;
export default SectionCarsAdm;

import styled from "styled-components";

export const Container = styled.div`
  top: 0;
  background-color: rgba(0, 0, 0, .5);
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index:2;
  display: flex;
  justify-content: center;
  align-items: center;
  

 > div{
    background-color: white;
    max-height: 1154px;
    padding: 20px;
    max-width: 375px;
    border-radius: 8px;
    z-index: 3;
   
 }
 
`
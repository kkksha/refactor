import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1665px;
  margin: 0 auto;
  position: relative;
  box-sizing: border-box;
  
  @media (max-width: 1665px){
    max-width: 1625px;
    padding: 0 40px;
    margin: 0;
  }
  
  @media only screen and (min-width: 650px) and (max-width: 1300px){
    max-width: calc(100vw - 10px);
    width: 100%;
    padding: 0 20px 0 40px;
    margin: 0;
  }
  
  @media (max-width: 650px){
    padding: 0 12px;
    margin: 0;
  }
`

export const ContainerFluid = styled.div`
  width: 100%;
  margin: 0 auto;
  position: relative;
  box-sizing: border-box;
  
  
`

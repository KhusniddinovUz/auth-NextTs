import styled from "styled-components";

export const FlexColumnContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 430px;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
  
  @media screen and (max-width: 500px){
    width: 80%;
  }

  @media screen and (min-width: 500px) and (max-width: 900px){
    width: 400px;
  }

  @media screen and (min-width: 900px) and (max-width: 1200px){
    width: 350px;
  }
`;

export const TitleWrapper = styled.div`
  max-width: 90%;    
`;
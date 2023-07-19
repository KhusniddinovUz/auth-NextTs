import styled from "styled-components";

export const OtpInputContainer = styled.div`
  width: 50px;
  height: 50px;
  margin-top:25px;
  border: 2px solid rgba(128, 152, 249, 0.50);
  border-radius: 10px;
  
  @media screen and (max-width: 600px){
    width: 40px;
    height: 40px;
  }
`;

export const OtpInputSeperator = styled.div`
  width: 20px;
  
  @media screen and (max-width: 600px){
    width: 10px;
  }
`;